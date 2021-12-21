import React,{useState, useEffect} from 'react'
import {GlobalData} from '../../index'
import {CardItem} from './CardItem';
import {CountryPicker} from './CountryPicker';

export const Cards = () => {

   const [data, setData]=useState([]);
   const [laoding, setloading]=useState(true)
   let [countries, setCountries]=useState('')
 
     useEffect(() =>{
         async function fetchData(){
            const realTimeData=await GlobalData();
            setData(realTimeData)
            setloading(false)
         }
         fetchData();
     },[]);

  if(laoding){
      return  <h2>Loading....</h2>
  }  
    // console.log(data);
    const handleChangeCountry=async (country) =>{
        // console.log(country);
        let fetchData;
        if(country === "Global"){
        fetchData=await GlobalData();
        }else{
            fetchData=await GlobalData(country)
        }
        setData(fetchData)
        setCountries(country)
        setloading(false)
    }


    return (
        <>
        <div>
            <h1>{countries}</h1>
           <CardItem confirmed={data.confirmed} deaths={data.deaths} recovered={data.recovered}/>
        </div>
        <CountryPicker handleChangeCountry={handleChangeCountry}/>
        </>
    )
}
