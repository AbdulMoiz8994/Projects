import {ADD_TRANSACTION,DELETE_TRANSACTION} from './types'

export const UseReducer = (state,action) =>{
    console.log(action);
     switch (action.type) {
         case ADD_TRANSACTION:
        return {
            ...state,
            transaction: [action.payload,...state.transaction]
        };   
        case DELETE_TRANSACTION:
          return{
              ...state,
              transaction:  state.transaction.filter((item) => item.id !== action.payload ), 
          }   
         default:
            return state
     }
}
