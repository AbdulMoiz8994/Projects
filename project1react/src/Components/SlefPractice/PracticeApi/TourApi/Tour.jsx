import React,{useState, useEffect} from 'react'
import {Tours} from './Tours'
 
const url='https://course-api.com/react-tours-project/'

export const Tour = () => {

    const [loading, setLoading]=useState(true)
   const [data, setData]=useState([]);

const removeTour=(id) =>{
    // console.log(typeof id);
    const filtedData=data.filter(item =>{
        // console.log(item);
        return item.id !== id
    })
   setData(filtedData)
}

    const fetchData=async () =>{
       try{
           const response=await fetch(url);
        //    console.log(response);
           const result=await response.json();
           setLoading(false);
        setData(result); 
       }catch(error){
           setLoading(false);
           console.log("Error", error);
       }
    }
    useEffect(() =>{
         fetchData();
    },[])
//  console.log(data);
//  console.log(loading);
 if(loading){
     return(
         <h1>Loading...</h1>
     )
 }
   if(data.length === 0){
       return(
           <>
           <h2>No tours Left</h2>
           <button onClick={() => fetchData()}>Refresh</button>
           </>
       )
   }
    return (
        <div>
        <Tours data={data} removeTour={removeTour}/>            
        </div>
    )
}
