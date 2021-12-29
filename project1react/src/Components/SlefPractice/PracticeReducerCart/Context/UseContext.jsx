import React,{useReducer} from 'react'
import {CreateContext} from './CreateContext'
import {UseReducer} from './UseReducer'
import {Data} from '../Component/data'

// types
import {INCREMENT, DECREMENT} from './type'


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

    return (
        <div>
            <CreateContext.Provider value={{
                cart: state.cart,
                 Increase,
                 Decrease,
            }}>
               {children}
            </CreateContext.Provider>
        </div>
    )
}
