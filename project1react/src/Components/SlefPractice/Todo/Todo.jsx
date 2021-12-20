import React, { useRef, useState, useEffect } from "react";
import "./Todo.css";

export const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const [saveId, setSaveId] = useState("");
  const [toggle, setToggle] = useState(false);
//   console.log(saveId);
  let ref = useRef("");

  useEffect(() => {
    ref.current.focus();
  }, []);

  const OnChnageFunc = () => {
    setData(ref.current.value);
  };

  const addData = () => {
    if (data === "") {
      return;
    } else if (data && toggle) {
      setItem(
        item.map((currEle) => {
          // console.log(currEle);
          if (currEle.id === saveId) {
            // console.log({ ...currEle, name: data });
            return ({ ...currEle, name: data });
          } else {
            return { ...currEle };
          }
        })
      );
      setToggle(false);
      setSaveId(null);
      setData((ref.current.value = ""));
    } else {
      const inputData = {
        id: new Date().getTime().toString(),
        name: data,
      };
      // console.log(inputData);
      setItem([...item, inputData]);
      setData((ref.current.value = ""));
    }
  };

  const deleteItem = () => {
    setItem([]);
  };

  const deleteeachItem = (id) => {
    // console.log(id);
    const eachId = item.filter((value) => {
      return value.id !== id;
    });
    // console.log(eachId);
    setItem(eachId);
  };

  const editEachITem = (id) => {
    const findData = item.find((value) => {
      return value.id === id;
    });
    //   console.log(name);
    setData((ref.current.value = findData.name));
    setSaveId(findData.id);
    setToggle(true);
  };
  // console.log(data);
  // console.log(item);
  return (
    <>
      <h1>Todo Application (CURD)</h1>
      <input type="text" ref={ref} placeholder="item" onChange={OnChnageFunc} />
      {toggle ? (
        <i className="fas fa-edit add-btn" onClick={addData}></i>
      ) : (
        <button type="submit" onClick={addData}>
          Add Item
        </button>
      )}
      <button type="submit" onClick={deleteItem}>
        Delete Items
      </button>
      <div className="items">
        {item.map((value) => {
          //  console.log(value);
          return (
            <div key={value.id}>
              <h2>{value.name}</h2>
              <div className="todo-btn">
                <i
                  className="fas fa-edit add-btn"
                  onClick={() => editEachITem(value.id)}
                ></i>
                <i
                  className="fas fa-trash-alt add-btn"
                  onClick={() => deleteeachItem(value.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
