import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delete_transaction} from '../Store/action'

export const History = () => {

    const data=useSelector(({transactions}) =>{
            console.log(transactions);
            return transactions
    })
// console.log(data);
const dispatch=useDispatch()
  
    return (
        <div>
            <h1>History</h1>

            <ul>
{data.map((items) =>{
    // console.log(items);
    return(
        <div key={items.id}>
            <li>{items.name}
             <span>
               ${items.amount}
            </span>
            <button onClick={() => dispatch(delete_transaction(items.id)) }>X</button>
               </li>
        </div>
    )
})}
            </ul>
        </div>
    )
}
