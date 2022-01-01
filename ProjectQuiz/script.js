const btn=document.querySelector("[data-button-submit]");
function addValue(){
    const inputText=document.querySelector("#inputText");
    // console.log(inputText.value);   
    
    if(inputText.value){
      location.href="./quiz.html"  
    }
}
btn.addEventListener('click', addValue)
