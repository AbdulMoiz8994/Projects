const screen=document.querySelector('[data-input]')


function getData(num){
    if(num === '.' && screen.value.includes('.'))return;
    screen.value +=num
}
function submitvalue(){
    screen.value =eval(screen.value)
}
function clearData(){
    screen.value=""
}