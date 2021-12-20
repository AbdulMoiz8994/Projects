import React,{useState} from 'react'
import data from './QuestionData'
import {ShowData} from './ShowData'
export const QuestionAns = () => {

    const [initialdata, setinitalData]=useState(data)
    // console.log(initialdata);

    return (
        <div>
            <h1>Questions And Answers About Login</h1>
             <div className="mainData">
                 {initialdata.map((value) =>{
                     const {id,title,info}=value;
                     return(
                         <div key={id}>
                          <ShowData  title={title} info={info}/>  
                         </div>
                     )
                 })}
                 </div>  
        </div>
    )
}
