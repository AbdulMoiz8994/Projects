import React,{useState} from 'react'
import './todostyle.css'

export const Todo = () => {

const [inputDate, setInputData]=useState("");
const [item, setItem]=useState([]);
const [saveId, setSaveID]=useState("")
const [toggleButton,setToggleButton]=useState(false)
// console.log(saveId);
const addItemFunc=()=>{

    //  console.log(typeof inputDataValue.id);
    if(inputDate === ''){
        return
    }
    // we need to creat an object to store an id to delete speciifc item
     else if(inputDate && toggleButton){
        setItem(item.map((currentelement) =>{
            console.log(currentelement);
           if(currentelement.id === saveId){
               // humyna ...currentelement same rakha ha 
               // console.log( currentelement.id, saveId)
               return({...currentelement, name:inputDate})
           }
        //    console.log(...currentelement);
               return {...currentelement}
        }))
        setInputData("")
        setSaveID(null)
        setToggleButton(false)
    }

    else{
      const inputDataValue={
        id: new Date().getTime().toString(),
       name: inputDate
      }  
        setItem([...item, inputDataValue])
        setInputData("")
    }
}
const deleteitem=(id)=>{
    // console.log(id);
  const updateitem= item.filter((item) =>{
         return item.id !== id
    })
    // console.log(updateitem);
    setItem(updateitem)
}

const edititem=(value) =>{
    //  console.log(value);
    //   setInputData(value.name)
    const findId=item.find((currentele) =>{
         return currentele.id === value
    })
    setInputData(findId.name)
    // console.log(findId);
    setSaveID(findId.id)
    setToggleButton(true)
}

const clearAllFunc=()=>{
   setItem([])
}
// console.log(item);
    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                <i className="far fa-list-alt"></i>
                <figcaption>Add Your Todo List here</figcaption>
                </figure>
                <div className="addItems">
                    <p></p>
                    <input type="text" value={inputDate} onChange={(e) => setInputData(e.target.value)}  placeholder="Add Items" className="form-control" />
                    {toggleButton?                    
                  (<i className="fas fa-edit add-btn" onClick={addItemFunc}></i>):
                    (<i className="fas fa-plus add-btn" onClick={addItemFunc}></i>)
                    }
                </div>
             {/* show our item */}
                  <div className="showItems">
                      {item.map((todoItem,ind) =>{
                          return(
                            <div key={todoItem.id} className="eacitem">
                            <h3>{todoItem.name}</h3>
                            <div className="todo-btn">
                            <i className="fas fa-edit add-btn" onClick={() => edititem(todoItem.id)}></i>
                            <i className="fas fa-trash-alt add-btn" onClick={() => deleteitem(todoItem.id)}></i>
                            </div>
                        </div>
                          )
                      })}

                  </div>

                {/* if we want to add the text on hover then we add  */}
                    <div className="showitem">
                    <button className="btn" data-sm-link-text="Remove All" onClick={clearAllFunc}>
                  <span>Remove All</span>  
                    </button>
                    </div>
            </div>
        </div>
        </>
    )
}
