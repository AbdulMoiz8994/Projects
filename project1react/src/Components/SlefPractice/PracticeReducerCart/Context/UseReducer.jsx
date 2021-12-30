import {INCREMENT, DECREMENT, REMOVE_CART, REMOVE_ALL} from './type'
export const UseReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case INCREMENT:
        let tempCart=state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount +1,price: cartItem.price + cartItem.price}
            }
            return cartItem
        })  
        // console.log(tempCart);
        return {...state, cart: tempCart}
        case DECREMENT:    
        let tempCartDec=state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount -1, price: cartItem.price - cartItem.price}
            }else{
               return cartItem
            } 
        }).filter((cartItem) =>{
            if(cartItem.amount == 0){
                console.log(cartItem.amount);
                return  cartItem.amount !== 0;
            }else{
                console.log(cartItem.amount);
                return cartItem.amount
            }
          }) 
        //   console.log(tempCartDec);
        return {...state, cart: tempCartDec};
        case REMOVE_CART:
          return {
              ...state,
              cart: state.cart.filter((cartITem) => cartITem.id !== action.payload)
          };   
          case REMOVE_ALL:
           return{
               cart: []
           };   
        default:
            return state
    }
}
