import React,{useContext} from 'react'
import {CreateContext} from '../Context/CreateContext'
import {CartItem} from './CartItem'

export const CartContainer = () => {
  const {cart}=useContext(CreateContext);
  console.log(cart);
     const totalAmount=cart.map((item) =>{
         return item.price   
     }).reduce((acc, value) => acc+=value ,0);
  console.log(totalAmount);
    return (
        <div>
            <h1>Your Bag</h1>
            <div>
              {cart.map((item) =>{
                //   console.log(item);
                  return <CartItem key={item.id} item={item} />
              })}
            </div>
            <hr />
            <div className="total">
                <h1>Total: {totalAmount}</h1>
            </div>
        </div>
    )
}
