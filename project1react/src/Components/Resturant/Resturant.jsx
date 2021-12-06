import React,{useState,useEffect, useReducer} from 'react'
import '../../App.css'
import {MenuApi} from './menuApi'
import {MenuCard} from './MenuCard'
import {Navbar} from './Navbar'


// we want all cateogry and condition also unique
// we are getting the data in obejct and we want an array via whole block []  and we only we want spread operator ...
const uniqueCateory=
 [...new Set(MenuApi.map((cur) =>{
    return cur.category
})), "All"] //we can give my default button as well like All
// console.log(uniqueCateory);
// useReducer
// const reducerFunc=(state, action) =>{
//     if(action.type === "INCR"){
//         state =state+1
//     }
//     if(state > 0 && action.type === "DECR"){
//         state =state-1
//     }
//     return state
// }

const Resturant = () => {
    // console.log(MenuApi);
const [uniqData, setUniData]=useState(uniqueCateory)    
const [data, setData]=useState(MenuApi)




// useReducer
// const initialData=0;
// const [state, dispatch]=useReducer(reducerFunc,initialData)
// console.log(state);



// useEffect
// const [nub, setIncrNub]=useState(0)
// useEffect(() =>{
//     document.title=`Counts ${nub}`
// },[nub])



const filterdata=(category) =>{
    // console.log(MenuApi);
    // we are making the  All button via checking and true then add update the data via use state function "setData()" and pass all array of objects
    if(category === "All"){
        setData(MenuApi)
        return  
}
const updateValue=data.filter((value) => {
    return value.category === category
}); 

 setData(updateValue)

}
    return (
        <>
        {/* useEffect */}
          {/* <button onClick={() => (nub  < 10 ? setIncrNub(nub+1):setIncrNub(0))}>Click Increment</button> */}
          {/* useReducer */}
          {/* <div>
          <p>{state}</p>
          <button onClick={() => dispatch({type: "INCR"})}>Click here</button>
      <button onClick={() => dispatch({type: "DECR"})}>Click here</button>
          </div> */}

        <Navbar filterdata={filterdata} uniqData={uniqData}/>
        <MenuCard data={data}/>
        </>
    )
}

export default Resturant
