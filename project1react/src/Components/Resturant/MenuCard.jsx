import React from 'react'

export const MenuCard = ({data}) => {
    return (
        <div>
        {data.map((item) =>{
            const {id,name ,category,description,image,price}=item
           return(
        <div className="card-cobtainer" key={id}>
        <div className="card">
            <div className="card-body"></div>
            <span className="card-number">{id}</span>
            <span className="card-auther">{category}</span>
            <h2 className="title">{name}</h2>
             <span className="card-description">
                    {description}
             </span>
             <div className="card-read">Read</div>
        </div>
        <img src={image} width="50%" height="250px" alt="images" className="card-media" />
        <span className="card-tag">{price}</span>
    </div>
)
})}
        </div>
    )
}
