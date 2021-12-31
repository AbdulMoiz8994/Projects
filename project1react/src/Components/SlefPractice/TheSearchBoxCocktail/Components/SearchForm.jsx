import React,{useContext, useRef, useEffect} from 'react'
import {CreateContext} from './Context/CreateContext'


export const SearchForm = () => {
    const searchValue=useRef('');

   const {setSearchItem}=useContext(CreateContext)
//    console.log(setSearchItem);

useEffect(() =>{
   searchValue.current.focus();   
},[])

const searchCocktail=() =>{
    setSearchItem(searchValue.current.value)
    // console.log(searchValue.current.value);
}
const handleClick=(e) =>{
   e.preventDefault();
}
    return (
        <div>
           <form onSubmit={handleClick}>
               <label htmlFor="inputBox">Search Your Favorite Cocktail</label>
                 <input type="text" ref={searchValue} onChange={searchCocktail} />
           </form>
        </div>
    )
}
