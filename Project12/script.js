// function add(num){
//     var a1=num.split("")
//     var b1=a1.toString()
//     console.log(b1);
//     var c1=b1.replace(",","")
//    console.log(Number(c1[0]) + Number(c1[1]));
//     // console.log((+a1[0] + (+a1[1])));


// }
// add("58");

const inputBox=document.querySelector("[data-input]")
const addBtn=document.querySelector("[data-addBtn]")
const deleteBtn=document.querySelector("[data-delBtn]")
const divItems=document.querySelector(".items");

function addItem(){
    // make the li and append in the div
    let liEle=document.createElement("li")  
    liEle.classList.add("lis")
    let liValue=document.createTextNode(inputBox.value)
    liEle.appendChild(liValue)
    // make two button edit and delete and append with each item li
    let editBtn=document.createElement("button")
    editBtn.classList.add("edit")
    let editText=document.createTextNode("Edit")
    editBtn.appendChild(editText)
    liEle.appendChild(editBtn)
    editBtn.addEventListener('click', editItem)
    // delete Btn
    let deleteBtn=document.createElement("button")
    deleteBtn.classList.add("delete")
    let deleteText=document.createTextNode("Delete")
    deleteBtn.appendChild(deleteText)
    liEle.appendChild(deleteBtn) 
    deleteBtn.addEventListener('click',deleteItem)
    divItems.prepend(liEle)
    inputBox.value="";

    function editItem(e){
        let oldValue= e.target.parentNode.firstChild.nodeValue
        inputBox.value=oldValue;
         if(inputBox.value){
           let editButton=document.createElement("button")
            editButton.classList.add("editButton")
           let EditTextN=document.createTextNode("Edit Text")
           editButton.appendChild(EditTextN)
           liEle.appendChild(editButton)
        //    divItems.appendChild(editButton)

          editButton.addEventListener('click',() =>{
           e.target.parentNode.firstChild.nodeValue=inputBox.value
           inputBox.value=""
          })
         }
         console.log(divItems);
    }


}
// add Item
addBtn.addEventListener('click',addItem)



// delete each Item
function deleteItem(e){
   e.target.parentNode.remove();
}

//delete All functionality
function deleteAll(){
    divItems.remove()
}
deleteBtn.addEventListener('click', deleteAll);