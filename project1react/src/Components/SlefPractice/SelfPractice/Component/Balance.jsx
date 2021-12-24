import React,{useContext} from 'react';
import {CreateContext} from '../Context/CreateContext';


export const Balance = () => {

   const {transaction}=useContext(CreateContext);
      console.log(transaction);
   const getTotalAmount=transaction.map((value) =>{
           return value.amount
   }).reduce((acc, value)=>{
       return acc + value
   },0).toFixed(2) 
   console.log(getTotalAmount);
    return (
        <div>
           <h2>Your Balance</h2>            
           <p>${getTotalAmount}</p>
        </div>
    )
}
