import React,{useState, useEffect} from 'react'
import {Countries} from '../Api/api'

export const CountryPicker = ({handleChangeCountry}) => {

    const [countries, setCountries]=useState([]);
     useEffect(() =>{
        async function getCountries(){
          const realCountries=  await Countries();
          setCountries(realCountries)
        }
        getCountries();
     },[]); 

    return (
        <div>
            <form>
                <select  id="" onChange={(e) => handleChangeCountry(e.target.value)}>
                    <option value="Global">Global</option>
                    {countries.map((country,ind) =>{
                        return(
                            <option  key={ind} value={country}>
                                {country}
                            </option>
                        )
                    })}
                </select>
            </form>
        </div>
    )
}
