import React,{useCallback,useState, useEffect} from 'react'
import {CreateContext} from './CreateContext'


export const UseContext = ({children}) => {

    const [loading, setLoading]=useState(true);
    const [searchItem, setSearchItem]=useState('');
    const [cocktail, setCocktail]=useState([]);
    // const [singleCocktail, setSingleCocktail]=useState("");
     
    let url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
 

    // if(singleCocktail){
        // console.log(" firstdata");
    //   url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${singleCocktail}`  
    // }else{
        // console.log(" second data");
    //    url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
    // }


//     This useCallBack hook will resverve the data in their cache
   const fetchData=useCallback(async () =>{
       setLoading(true)
   try{
    // setLoading(true)
    const data=await fetch(`${url}${searchItem}`);
    // console.log(`${url}${searchItem}`);
    const  {drinks}=await data.json();  
    // console.log(drinks);
  { 
       const newCon= drinks?(
    drinks.map((item) =>{
        //   console.log(item);
          const {idDrink,strDrink, strDrinkThumb, strAlcoholic, strGlass}=item;
        //   console.log(idDrink,strDrink, strDrinkThumb, strAlcoholic, strGlass);
          return({
           id: idDrink,
           name: strDrink,
           avatarURL:strDrinkThumb,
           info: strAlcoholic,
           glass: strGlass,
        })
      }))
  : setCocktail([]);
  setCocktail(newCon);
  setLoading(false);
}
   }catch(error){
      console.log(error);
      setLoading(false);
   }
},[searchItem,url]);

useEffect(() =>{
   fetchData()
},[fetchData,searchItem])
// console.log(searchItem);



// console.log(cocktail);
// function cockSingle(id){
//   console.log(id);
//   setSingleCocktail(id)
// }

    return (
        <div>
    <CreateContext.Provider value={{
          loading,
          setSearchItem,
          cocktail,
    }}>
         {children}
    </CreateContext.Provider>

            
        </div>
    )
}
