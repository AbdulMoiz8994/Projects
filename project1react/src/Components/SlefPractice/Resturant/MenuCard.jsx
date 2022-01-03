import React from 'react'

export const MenuCard = ({items}) => {
    // console.log(items);
    const {id, name,image, category, price, description}=items
    return (
        <div className='container_resturant'>
            <h2>{id}</h2>
            <h3>{category}</h3>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} alt="" />
            <p>{price}</p>
        </div>
    )
}
