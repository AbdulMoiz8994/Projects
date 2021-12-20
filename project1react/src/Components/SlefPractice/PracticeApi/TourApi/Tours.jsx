import React,{useState} from 'react'

export const Tours = ({data, removeTour}) => {
    // console.log(data);

let [readmore, setReadMore]=useState(false);

    return (
        <div>
            <h1>Our Tour</h1>
           <div>
               {data.map((tour) =>{
                  return(
                      <div key={tour.id}>
                        <img src={tour.image} alt="" />  
                        <div className="secondportion">
                            <h4>{tour.name}</h4>
                            <h5>{tour.price}</h5>
                        </div>
                        <div className="para">
                            <p>{readmore ? tour.info : `${tour.info.substring(0,200)}...`} 
                            <button onClick={() => setReadMore(!readmore)}>
                                {readmore? "Show Less" : "Show More"}
                                </button>
                                </p>
                        </div>
                        {/* here we are passing the data from bottom to top */}
                        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
                       </div>
                  )
               })}
               </div>   
        </div>
    )
}
