import React,{useState, useEffect, useCallback} from 'react'
import {Link, useParams} from 'react-router-dom'
export const SingleCocktail = () => {
   
    const {id}=useParams();
    console.log(id);
  const [loading, setLoading]=useState(true);
  const [cocktails, setCocktails]=useState({});


 
   const fetchSingleCock=useCallback(async() =>{

     const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
     const {drinks}=await response.json();
    // console.log(drinks);       
    if(drinks){    
     const {strDrink: name, strDrinkThumb: avatarURL, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructtions }=drinks[0]; 
    // console.log(name, avatarURL, info,glass, category, instructtions);    


    //   we will put all destructure  into an object
      const newCocktails={
          name,
          avatarURL,
          info,
          glass,
          category, 
          instructtions
      }
       setCocktails(newCocktails); 
      setLoading(false);
    }else{
        setCocktails({});
    }        
   },[])

console.log(cocktails);

    useEffect(() =>{
        fetchSingleCock()
    },[])
    if(loading){
        return <h1>Loading..</h1>
    }
    if(!cocktails){
        return <h1>no cocktail to display</h1>
    } else{
  const {name,avatarURL, info, glass, category, instructtions}=cocktails

        return (
            <div>
               <Link to="/">Back Home</Link>  
               <h1>{name}</h1>
               <img src={avatarURL} alt="" />
               <p>Name: {name}</p>
               <p>Category: {category}</p>
               <p>Info: {info}</p>
               <p>GLass: {glass}</p>
               <p>Instructions: {instructtions}</p>
            </div>
        )
    }

}
