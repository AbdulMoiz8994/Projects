export const ADD_VALUE='ADD_VALUE';
export const DELETE_TRANSACTIONS='DELETE_TRANSACTIONS';


export let add_value=(data) =>{
    // console.log(data);
    return{
        type: ADD_VALUE,
        payload: data
    }
}
export let delete_transaction=(id) =>{
    console.log(id);
    return{
        type: DELETE_TRANSACTIONS,
        payload: id
    }
}