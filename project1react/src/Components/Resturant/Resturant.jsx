import React,{useState} from 'react'
import '../../App.css'
import {MenuApi} from './menuApi'
import {MenuCard} from './MenuCard'


// we want all cateogry and condition also unique
// we are getting the data in obejct and we want an array via whole block []  and we only we want spread operator ...
const uniqueCateory=
 [...new Set(MenuApi.map((cur) =>{
    return cur.category
})), "All"] //we can give my default button as well like All
// console.log(uniqueCateory);


const Resturant = () => {
    // console.log(MenuApi);

const [uniqData, setUniData]=useState(uniqueCateory)    
const [data, setData]=useState(MenuApi)
   
const filterdata=(category) =>{
    console.log(MenuApi);
    // we are making the  All button via checking and true then add update the data via use state function "setData()" and pass all array of objects
    if(category === "All"){
        return setData(MenuApi)
      
    }
const updateValue=data.filter((value) => {
    return value.category === category
}); 

 setData(updateValue)

}
    return (
        <>
        <nav className="navbar">
        <div className="button-group">
         {
             uniqData.map((item,ind) =>{
                return(
                <button key={ind} className="btn-grou-item" onClick={() => filterdata(item)}>
                    {item}
                </button>
                )
             })
         }
         </div> 



            
        </nav>
        <MenuCard data={data}/>
        </>
    )
}

export default Resturant
