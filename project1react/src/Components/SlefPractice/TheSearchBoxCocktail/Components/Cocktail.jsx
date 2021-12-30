import React,{useContext} from 'react'
import {CreateContext} from './Context/CreateContext'
import {Link} from 'react-router-dom'


export const Cocktail = () => {

   const {loading,cocktail}=useContext(CreateContext);
    // console.log(loading, cocktail);

    if(loading){
        return <h1>Loading...</h1>
    }

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
}
