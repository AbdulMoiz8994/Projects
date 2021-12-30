import React from 'react'
import {Link} from 'react-router-dom'



export const Navbar = () => {
    
    return (
        <div>
            <div className="heading">
                <h1>The CocktailDB</h1>
            </div>
           <Link to="/">Home</Link> 
           <Link to="/about">About</Link>
        </div>
    )
}
