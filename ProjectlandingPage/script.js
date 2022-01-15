// Get DOM Elements
const data_navbar=document.querySelector("[data-navbar]");
let   toggle=document.querySelector("#toggle");
const model=document.getElementById("model");
const form_btn=document.getElementById("form_btn");
const cut_btn=document.getElementById("cut_btn");
const names=document.getElementById("email")
// console.log(data_navbar);

toggle.addEventListener('click', () =>{
    data_navbar.classList.toggle("active")
    if(data_navbar.className=="active"){
       toggle.innerHTML=`<i class="fas fa-times fa-2x"></i>` 
    }else{
        toggle.innerHTML=`<i class="fas fa-bars fa-2x"></i>` 
    }
})

form_btn.addEventListener('click', () =>{
    model.classList.add("model_active")
})
cut_btn.addEventListener('click', () =>{
    model.classList.remove("model_active");
})
// listen for click outside of model
window.addEventListener('click',(e) =>{
   console.log(e.target);
// if(e.target == names){
// //   names.innerHTML="moiza788@hgmail.com"
// console.log(true);
// }
//   e.target == model ?     model.classList.remove("model_active") : false


 e.target == model && model.classList.remove("model_active")
})
