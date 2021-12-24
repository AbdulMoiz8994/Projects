import React,{useReducer} from 'react'
import {CreateContext} from './CreateContext'
import {UseReducer} from './UseReducer'
import {ADD_TRANSACTION,DELETE_TRANSACTION} from './types'

export const UseContext = (props) => {
    let initialState={    
         transaction:[
        {id:1, desc: "Salary", amount: 500},
        {id:2, desc: "Rent", amount: 2000},
        {id:3, desc: "Dinner", amount: -200},
        {id:4, desc: "Food", amount: -100},
    ]
};
// console.log(initialState);

const [state, dispatch]=useReducer(UseReducer, initialState);
// console.log(state);

   const addTransaction=(transaction) =>{
      console.log(transaction);
      dispatch({
          type: ADD_TRANSACTION,
          payload: transaction,
      })
   }
const deleteTransaction=(id)=>{
console.log(id);
dispatch({
    type: DELETE_TRANSACTION,
    payload: id,
})
}

    return (
        <CreateContext.Provider value={{
            transaction: state.transaction,
           addTransaction,  
           deleteTransaction,
        }}>
            {/* This will get the reference of all Component which is under the USeContext Custom Comp Element*/}
            {props.children}
        </CreateContext.Provider>
    )
}
