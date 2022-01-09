import React from 'react'
import { useSelector } from 'react-redux'

export const IcomeandExpense = () => {

    // if we want to show data and using redux then we need to use useSelector
  const data=useSelector(({transactions}) =>{
         return transactions
  })
//   console.log(data);
    // we are doing destructure  
  const income=data.map(({amount}) =>{
        return amount
  }).filter((value) =>{
    return value > 0 
  }).reduce((acc, value) =>{
     return acc + value
  },0).toFixed(2)
//    console.log(income);

 const expense=data.map(({amount}) =>{
      return amount
 }).filter((actAmount) =>{
     return actAmount < 0
 }).reduce((acc, value) =>{
       return acc + value
 },0).toFixed(2);
//    console.log(expense);



    return (
        <div>
            <h1>Income <span>${income}</span></h1>
            <h1>Expense <span>${expense}</span></h1>
        </div>
    )
}
