import React,{useReducer} from 'react'
import {CreateContext} from './CreateContext'
import {UseReducer} from './UseReducer'
import {Data} from '../Component/data'

// types
import {INCREMENT, DECREMENT, REMOVE_CART,REMOVE_ALL} from './type'


export const UseContext = ({children}) => {
    //  console.log(Data);
//    const url=`https://course-api.com/react-useReducer-cart-project`;

   let initialState={
    // loading: false,
    cart:Data,
    // total: 0,
    // amount: 0,      
   }

    let [state, dispatch]=useReducer(UseReducer, initialState)
    console.log(state);

const Increase=(id) =>{
//   console.log(id);
     dispatch({
         type: INCREMENT,
         payload: id
     })
}
const  Decrease=(id) =>{
    // console.log(id);
    dispatch({
        type: DECREMENT,
        payload: id,

    })
}

const removeItem=(id)=>{
//   console.log(id);
  dispatch({
      type: REMOVE_CART,
      payload: id
  })
}
const removeAll=() =>{
// console.log(cart);
dispatch({
   type: REMOVE_ALL,
})
}
    return (
        <div>
            <CreateContext.Provider value={{
                cart: state.cart,
                 Increase,
                 Decrease,
                 removeItem,
                 removeAll,
            }}>
               {children}
            </CreateContext.Provider>
        </div>
    )
}
