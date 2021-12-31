import React,{useContext} from 'react'
import {CreateContext} from './Context/CreateContext'
import {Link} from 'react-router-dom'


export const Cocktail = () => {

   let {loading,cocktail}=useContext(CreateContext);
    // console.log(cocktail);

    if(loading){
        return <h1>Loading...</h1>
    }else{
    if(cocktail === undefined){
        return <h1>There is no Cocktails your search criteria</h1>
    }
    // else{   
    return (
        <div>
            {cocktail.map((singleItem) =>{
                const {id,name, avatarURL, info,glass}=singleItem;
                return(
                    <div key={id}>
                        <img src={avatarURL} alt="Drink Juice" />
                        <h2>{name}</h2>
                        <h4>{glass}</h4>
                        <p>{info}</p>
                        <Link to={`/cocktail/${id}`}>Details</Link>

                        {/* Testing Purpose */}
                        {/* <button  onClick={() => cockSingle(id)}>Details</button> */}

                    </div>
                );
            })}
        </div>
    )
// }
}
}