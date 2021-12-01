// get the Dom Elements
const container=document.querySelector('#mainContainer')
const btn=document.getElementById('btn')

function startQuiz(){
   const inputValue=document.querySelector('#name')    
    if(inputValue.value){
        // console.log(inputValue.value);
        // document.writeln("<script type='text/javascript' src='quizdata.js'></script>")
        
        // to redirect to another page 
        location.href='quizdata.html'
    }else{
        alert('Please write down your name')
    }
}
btn.addEventListener('click', startQuiz)
