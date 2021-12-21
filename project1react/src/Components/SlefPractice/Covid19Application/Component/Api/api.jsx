import axios  from "axios";

const url='https://covid19.mathdro.id/api';


export const GlobalData=async (country) =>{
    let ChangURl=url
    if(country){
         ChangURl=`${url}/countries/${country}`    
    }
    
    try{
      const {data:{confirmed, deaths,recovered}}=await axios.get(`${ChangURl}`)  
    //   console.log(confirmed,deaths,recovered);
         const value={confirmed,deaths,recovered}
       return value
    } catch(error){
    console.error(error);
    }
}


export const Countries=async() =>{
    try{
      const {data:{countries}}=await axios.get(`${url}/countries`);
    //   console.log(countries);
      const modifyCountries=countries.map((countries) =>{
      return countries.name
      })
    //   console.log(modifyCountries);
      return modifyCountries;
    }catch(error){
        console.log(error);
    }
}