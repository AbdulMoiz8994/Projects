import React from 'react'


export const Navbar = ({uniqueData,filteritem}) => {
   console.log(uniqueData, filteritem);
    return (
        <div>
            {uniqueData && uniqueData.map((cate, ind) =>{
             return  <button key={ind} onClick={() => filteritem(cate)}>{cate}</button>
            })}
        </div>
    )
}
