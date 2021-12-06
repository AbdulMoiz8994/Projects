import React from 'react'

export const Navbar = ({filterdata,uniqData}) => {
    console.log(uniqData);
    return (
        <div>
                   <nav className="navbar">
        <div className="button-group">
         {
             uniqData.map((item,ind) =>{
                return(
                <button  key={ind} className="btn-grou-item" onClick={() => filterdata(item)}>
                    {item}
                </button>
                )
             })
         }
         </div>             
        </nav>
        </div>
    )
}
