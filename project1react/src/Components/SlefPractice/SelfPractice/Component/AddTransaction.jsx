import React,{useState,useContext} from 'react';
import {CreateContext} from '../Context/CreateContext'

export const AddTransaction = () => {

    const [data, setdata]=useState("");
    const [amount, setAmount]=useState(0)
    const {addTransaction}=useContext(CreateContext);
     console.log(addTransaction);
function addData(e){
   e.preventDefault();
   console.log(data);
   console.log(amount);
   const datObj={
       id: new Date().getTime(),
       desc: data,
       amount: Number(amount)
   }
   addTransaction(datObj);
   setdata("");
   setAmount(0);
}
    
    return (
        <div>
            <h1>Add new Transaction</h1>
            <div className="form">
                <label htmlFor="item">Enter Item</label>
                <input type="text"  onChange={(e) => setdata(e.target.value)}  id='item' placeholder='Please write Item' required />
                <label htmlFor="amount">Amount</label>
                <input type="number" onChange={(e) => setAmount(e.target.value)}  id="amount" required/>
                <button onClick={addData}>ADD Transaction</button>
            </div>
        </div>
    )
}
