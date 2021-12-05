// get the add button via dom elements;
const addbtn=document.getElementById('addbtn');
const contentDiv=document.querySelector('.content')
// console.log(contentDiv);




const addNewNote=(text='')=>{

    let noteDiv=document.createElement('div')
    noteDiv.classList.add('note')
    let htmlBodyNote=`
    <div class="operation">
        <button class="edit" id="edit"> <i class="fas fa-edit"></i></button>
        <button class="delete" id="delete"><i class="fas fa-trash-alt"></i> </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" name="" id="" cols="30" rows="5"></textarea>
        `

noteDiv.insertAdjacentHTML('afterbegin',htmlBodyNote)
// console.log(noteDiv);
// get the referencec
const deletebtn=noteDiv.querySelector('.delete');
const editbtn=noteDiv.querySelector('.edit');
const main=noteDiv.querySelector('.main');
const textArea=noteDiv.querySelector('textarea')

//   console.log(textArea.value=text);
    main.innerHTML=text
deletebtn.addEventListener('click',() =>{
    noteDiv.remove();
})
// make the toggle button and apply the css as well
editbtn.addEventListener('click',() =>{
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden')
})
textArea.addEventListener('change',(event) =>{
  const value= event.target.value
  main.textContent=value
})

document.body.appendChild(noteDiv)
contentDiv.appendChild(noteDiv)

}


addbtn.addEventListener('click', () => addNewNote())