import React from 'react'

export const CardItem = ({confirmed,deaths,recovered}) => {
    return (
        <div>
             <h1>Confirmed</h1>
             <p>{confirmed.value}</p>
             <h1>Deaths</h1>
             <p>{deaths.value}</p>
             <h2>Recovered</h2>
             <p>{recovered.value}</p>
        </div>
    )
}
