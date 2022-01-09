import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {add_value} from '../Store/action';
export const AddTransaction = () => {



    const dispatch=useDispatch();
    const [data, setData]=useState("");
    const [amount, setAmount]=useState(0);

 const addFunc=(e) => {
   e.preventDefault();
   const objData={
       id: new Date().getTime(),
       name: data,
       amount: Number(amount),
   }
//    console.log(objData);
   dispatch(add_value(objData))
//    add_value   
 };

    return (
        <div>
            <h1>Add Transaction Form</h1>
            <input type="text" placeholder='Items' onChange={(e) => setData(e.target.value)} /> 
            {` `}
            <input type="number" id="" placeholder='Amount' onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={addFunc}>Add Transaction</button>
        </div>
    )
}
