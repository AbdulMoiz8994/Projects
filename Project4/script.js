//  get Dom Elements
const main_btn=document.getElementsByClassName('btn-model-btn');
const modelovelay=document.getElementsByClassName('model-ovelay');
const close_btn=document.getElementsByClassName('close-btn');
console.log(main_btn[0]);
console.log(modelovelay);
console.log(close_btn);
main_btn[0].addEventListener('click', function(){
    modelovelay[0].classList.add('open-model')
})
close_btn[0].addEventListener('click', () =>{
    modelovelay[0].classList.remove('open-model')
})