import React,{useState} from 'react'
import './todostyle.css'

export const Todo = () => {

const [inputDate, setInputData]=useState("");
const [item, setItem]=useState([]);

const addItemFunc=()=>{
    setItem()  
}

    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                <i className="far fa-list-alt"></i>
                <figcaption>Add Your Todo List here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" value={inputDate} onChange={(e) => setInputData(e.target.value)}  placeholder="Add Items" className="form-control" />
                    <i class="fas fa-plus add-btn" onClick={addItemFunc}></i>
                </div>
             {/* show our item */}
                  <div className="showItems">
                      <div className="eacitem">
                          <h3>Apple</h3>
                          <div className="todo-btn">
                          <i class="fas fa-edit add-btn"></i>
                          <i class="fas fa-trash-alt add-btn"></i>

                          </div>
                      </div>
                  </div>

                {/* if we want to add the text on hover then we add  */}
                    <div className="showitem">
                    <button className="btn" data-sm-link-text="Remove All">
                  <span>Check List</span>  
                    </button>
                    </div>
            </div>
        </div>
        </>
    )
}
