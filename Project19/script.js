// const btn_model_btn=document.querySelector("#btn-model_btn");
// const close_btn=document.getElementById("close_btn");
// const model_overview=document.getElementById("model-overview");
// console.log(model_overview);

// btn_model_btn.addEventListener('click',() =>{
//      model_overview.classList.add("btn-model_btn")
// })
// close_btn.addEventListener('click',() =>{
//     model_overview.classList.remove("btn-model_btn")
// })
// console.log(model_overview);

const overlay=document.getElementById("overlay");
const model_overview=document.getElementById("model-overview");
const open_btn=document.querySelector("[data-model-target]");
const close_btn=document.querySelector("[data-close-button]");

overlay.addEventListener('click',() =>{
    const allModels=document.querySelector("#overlay")  
    allModels.classList.remove("active");
})


open_btn.addEventListener('click', () =>{
    model_overview.classList.add("active")
    overlay.classList.add("active")
})
close_btn.addEventListener('click', () =>{
    model_overview.classList.remove("active")
    overlay.classList.remove("active")
})