import React,{useState} from 'react'
import {MenuApi} from '../../Resturant/menuApi'
import {MenuCard} from './MenuCard'
import {Navbar} from './Navbar'

export const Resturant = () => {
    
const category= [...new Set( MenuApi.map((items) =>{
      return items.category  
})),"All"];
console.log(category);

    const [data, setData]=useState(MenuApi);
    const [uniqueData, setuniqueData]=useState(category) 
    // console.log(data);
    
const filteritem=(cat) =>{
    // console.log(cat);
    if(cat === "All"){
        setData(MenuApi)
        return
    }else{
    const filterbutton=MenuApi.filter((itemButton) =>{
        console.log(itemButton.category , cat);
          return itemButton.category === cat  
    })
    console.log(filterbutton);
    setData(filterbutton)
}

}

    return (
        <div>
       <Navbar uniqueData={uniqueData} filteritem={filteritem}/>
            {data && data.map((items) =>{
              return  <MenuCard key={items.id} items={items}/> 
            })}
        </div>
    )
}
