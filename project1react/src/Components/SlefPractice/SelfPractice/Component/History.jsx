import React, { useContext } from 'react';
import {CreateContext} from '../Context/CreateContext'


export const History = () => {
   const {transaction,deleteTransaction}=useContext(CreateContext)
   console.log(transaction,deleteTransaction);


    return (
        <div>
            <h1>History</h1>
            <ul>
           {transaction.map((items) =>{
               console.log(items);
               return(
                   <div key={items.id}>
                     <li>
                        {items.desc}
                        <span>
                        {items.amount}
                        </span>
                        <button onClick={() => deleteTransaction(items.id)}>X</button>
                     </li>       
                   </div>
               );
           })}
           </ul>
        </div>
    )
}
