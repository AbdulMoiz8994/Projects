// http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=211b4c2c05f877794b60702d3abb499a
import React,{useEffect,useState} from 'react'
import './WeatherApi.css'


export const WeatherApi = () => {


const [value, setValue]=useState("karachi");
const [tempdata, setTemp]=useState({});
const [weatherIcon, setWeatherIcon]=useState("");


const getWeatherInfo= async ()=>{

    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=211b4c2c05f877794b60702d3abb499a`
        let res=await fetch(url)
        //  console.log(res);
         const data=await res.json();
         console.log(data);
         const {temp, humidity,pressure}=data.main
         const {main:weathermood}=data.weather[0]
         const {deg,speed}=data.wind
         const {country,sunset,sunrise}=data.sys
         const {name}=data

        //  make the new object pass this and useState hook when other country search it should show new country data
         const myNewWeather={
            temp, 
            humidity,
            pressure,
            weathermood,
            deg,
            speed,
            country,
            sunset,
            name,
            sunrise
         }
         setTemp(myNewWeather)
         }

         catch(error){
         console.log(error);
         }
           
}
const {temp,humidity,pressure,weathermood,deg,speed,country,sunset,name,sunrise}=tempdata
// first we want convert second in time
let sec=sunset;
// console.log(sec);
const date=new Date(sec * 1000);
console.log(date);
const finRes=`${date.getHours()}:${date.getMinutes()}`
// console.log(finRes);
// first convert second into time of today
const getSecs=sunrise;
console.log(sunrise);
const getdate=new Date(getSecs * 1000)
console.log(getdate.getHours(), getdate.getMinutes());
let finalResult;
if(getdate.getHours() < 10 && getdate.getMinutes() < 10){
     finalResult= `0${getdate.getHours()}:0${getdate.getMinutes()}`
}else{
    finalResult=`${getdate.getHours()}:${getdate.getMinutes()}`
}
// console.log(finalResult);
useEffect(() => {
    if(weathermood){
        switch (weathermood) {
            case "Clear":
                setWeatherIcon("bi-brightness-high-fill")
            break;
            case "Haze":
                setWeatherIcon("bi-cloud-haze2")
                break;
              case "Mist":
                  setWeatherIcon("bi-cloud-lightning-fill");
                break; 
                case "Rain":
                  setWeatherIcon("bi-cloud-rain");
                break;
                case "Clouds":
                    setWeatherIcon("bi-clouds-fill");
                  break;
            default:
                setWeatherIcon("bi-brightness-high-fill")
                break;
        }
    }else{
        return
    }
   
}, [weathermood])

useEffect(() =>{
  getWeatherInfo();
},[])
    return (
        <div>
            <input type="search"
              id="city" 
              placeholder='search' 
              autoFocus 
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={getWeatherInfo}>Search</button>
             <h1>date:{new Date().toLocaleString()}</h1>
            <h1>{country}</h1>
            <h1>{name}</h1>
            <h1>{weathermood}</h1>
            <h1>{temp}&deg;</h1>
            <h1>{pressure}</h1>
            <h1>{humidity}</h1>
            <h1>{deg}</h1>
            <h1>{speed}</h1>
            <h1>{finRes} PM</h1>
            <h1>{finalResult} AM</h1>
       <div className="image">
       <i className={`${weatherIcon} image2`}></i>
        </div>           
        </div>
    )
}
