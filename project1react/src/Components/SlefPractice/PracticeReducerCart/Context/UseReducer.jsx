import {INCREMENT, DECREMENT} from './type'
export const UseReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case INCREMENT:
        let tempCart=state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount +1}
            }
            return cartItem
        })  
        console.log(tempCart);
        return {...state, cart: tempCart}
        case DECREMENT:    
        let tempCartDec=state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount -1}
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
          console.log(tempCartDec);
        return {...state, cart: tempCartDec}

        default:
            return state
    }

}
