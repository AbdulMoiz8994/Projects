import React,{useContext} from 'react'
import {INCREMENT, DECREMENT} from '../Context/type'
import {CreateContext} from '../Context/CreateContext'
export const CartItem = ({item}) => {
    // console.log(item);
    const {id,img,title,price, amount}=item;
  const {Increase, Decrease}=useContext(CreateContext);


    return (
        <div>
          <img src={img} alt="" />
          <h4>{title}</h4>     
          <p>${price}</p>
          <button onClick={() => Increase(id)}>+</button>   
          <p>{amount}</p>        
          <button onClick={() => Decrease(id)}>-</button> <br />
          <button>Remove</button>
        </div>
    )
}
