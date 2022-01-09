import {ADD_VALUE,DELETE_TRANSACTIONS} from './action'



let initialValue={
    transactions:[
    {id:1, name: "Abdul Moiz",amount: 1000},
    {id:2, name: "Abdul Rafay",amount: 100},
    {id:3, name: "Abdul Malik",amount: -400},
    {id:4, name: "Abdul Basit",amount:-100},
]
};

export const reducer=(state=initialValue, action) =>{
    console.log(action);
    switch(action.type){
     case ADD_VALUE:
     return{
         transactions: [action.payload,...state.transactions]
     };
     case DELETE_TRANSACTIONS:
         return{
             ...state,
             transactions: state.transactions.filter((value) => value.id  !== action.payload)
         }
     default:
         return {...state}   
    }

}