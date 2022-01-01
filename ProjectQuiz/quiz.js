// list of questions
const questions=[
    {
        question: "Q1 CPU Stands for",
        answer: "central processing unit",
        option: [
            "central processing unit",
            "central programming unit",
            "central performance unit",
            "central per unit"
        ]
    },
    {
        question: 'Q2 The term "Computer" is the derived from ?',
        answer: "latin",
        option:[
            "latin",
             "english",
             "german",
             "Arabic"
        ]
    },
    {
        question: 'Q3 Who is the father of Computer ?',
        answer: "Charles Babbage",
        option:[
            "Augusta Adaming",
            "Charles Babbage",
            "Mark",
            "Jenes Sifart"
        ]
    },
    {
        question: 'Q4 WWW Stands for ?',
        answer: "World Wide Web",
        option:[
            "World Whole Web",
             "Wide World Web",
             "Web World Wide",
             "World Wide Web"
        ]
    },
    {
        question: 'Q5 Who is the father of Internet ?',
        answer: "Vint Cerf",
        option:[
            "Vint Cerf",
             "Denis Riche",
             "Roward",
             "Watson Raowe"
        ]
    },
];

const next_question=document.getElementById("next_question");
const next_questionRes=document.querySelector("#next_question");
const divbtn=document.getElementById("btns");
// console.log(question, options, next_question);

let questioncount=0;
let score=0;
// for initial/first time loading it will load first
const load=document.querySelector("body");
load.onload=function(){
   questionFunc(questioncount);      
   optionsFunc(questioncount)
   rmactiveClass(questioncount)

}


function questionFunc(e){
let question=document.getElementById("question");
//   console.log(questions[e].question);
    question.innerHTML= questions[e].question   

}
function nextquestionFunc(){
   if(questioncount >= questions.length){
//   console.log(false);
   }else{
    rmactiveClass(questioncount)
    questioncount++
    questionFunc(questioncount);
    optionsFunc(questioncount)
   }

 };

 function optionsFunc(e){
    let options=document.querySelectorAll("[data-options]");
    // console.log(options[e].innerHTML);
    for(let i=0; i < options.length; i++){
        // console.log(options[i]);
       options[i].innerHTML=questions[e].option[i]; 
    }         
 }
function addactiveClass(e){
    rmactiveClass()
   e.classList.add("active")
}

function rmactiveClass(e){
    const getActiveClass=document.querySelectorAll(".active");
    // console.log(getActiveClass);
    getActiveClass.forEach((activeClass) =>{
        // console.log(activeClass.innerHTML, questions[e].answer);
         activeClass.classList.remove("active")   
      if(activeClass.innerHTML == questions[e].answer){
          score +=10
      }
    })
    // second approach
    // for(let i =0; i < getActiveClass.length; i++){
    //     console.log(getActiveClass[i]);
    //  getActiveClass[i].classList.remove("active")  
    // }

}

next_question.addEventListener('click', nextquestionFunc) 


function result(){
    if(questioncount > questions.length -1){
        next_questionRes.innerHTML="Restart"

        next_questionRes.addEventListener('click', () =>{
            a.classList.add("removebtn")
            location.href="./index.html"                
            
        })
        // create a href
          
        let a=document.createElement("a");
        a.className="btn btn-primary"
        a.innerHTML="Result"
        console.log(a);
        divbtn.appendChild(a)
        // a.addEventListener('click',() =>{
        //     location.href="./result.html"
        // })
        a.addEventListener('click',() =>{
            alert(score)
        })

    }

}
next_questionRes.addEventListener('click', result)




