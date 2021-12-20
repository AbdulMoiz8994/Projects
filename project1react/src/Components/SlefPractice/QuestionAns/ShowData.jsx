import React, { useState } from 'react'

export const ShowData = ({title, info}) => {

    const [readmore, setReadMore]=useState(false);
    return (
        <div>
            <header>
            <p>{title}</p>
            <button onClick={() => setReadMore(!readmore)}>
                {readmore ? "-" : "+"}
            </button>
            </header>
            {readmore && info}
            <hr />

        </div>
    )
}
