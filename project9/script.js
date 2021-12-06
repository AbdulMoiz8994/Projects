// get the dom elements
// console.log(screen.value);
let calcultor=false;
function clearData(){
    const screen=document.getElementById('screen');
   screen.value="";
   calcultor=false
}


function getNumber(num){
    // console.log(num);
    const screen=document.getElementById('screen');
     if(calcultor == true){
         if(num == "+" || num == "-" || num == "/" || num == "*"){
             screen.value +=num;
         }else{
         screen.value =num;
         }
     }else{
         screen.value +=num
     }
     calcultor=false
}


function submit(){
    const screen=document.getElementById('screen');
    // console.log(screen.value);
    screen.value=eval(screen.value)
    calcultor=true
}