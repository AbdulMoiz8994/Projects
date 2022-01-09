import React from "react";
import { useSelector } from "react-redux";

export const Balance = () => {

  const totalAmount=useSelector(({transactions}) =>{
      return transactions
  }).map(({amount}) =>{
   return amount
  }).reduce((acc,value) =>{
     return acc + value
  },0).toFixed(2);
//  console.log(totalAmount);

  return (
    <div>
      <h1>
        Balance
        <p>${totalAmount}</p>
      </h1>
    </div>
  );
};
