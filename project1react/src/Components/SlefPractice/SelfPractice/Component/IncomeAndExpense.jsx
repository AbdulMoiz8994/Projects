import React,{useContext} from 'react'
import {CreateContext} from '../Context/CreateContext'

export const IncomeAndExpense = () => {

    const {transaction}=useContext(CreateContext) 
    console.log(transaction);
    const getposvalue=transaction.map((items) =>{
             return items.amount
    }).filter((number) =>{
         return number > 0
    }).reduce((acc, posNumber) =>{
            return acc + posNumber   
    },0).toFixed(2)
    // console.log(getposvalue);
    const getnegvalue=transaction.map((number) =>{
           return number.amount
    }).filter((negNumber) =>{
         return negNumber < 0
    }).reduce((acc,negNumber) =>{
            return acc + negNumber
    },0).toFixed(2)
    console.log(getnegvalue);


    return (
        <>
        <div className="income">
            <h2>Income</h2>   
            <p>${getposvalue}</p>
        </div>   
       <div className="expense">
           <h2>Expense</h2>
           <p>${getnegvalue}</p>
       </div>
        </>
    )
}
