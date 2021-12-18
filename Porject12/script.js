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
]


//  Dom Elements
const button=document.querySelector("[data-button]");

let listOfQuestions=0;

const load=document.querySelector('body')
load.onload=function(){
   question(listOfQuestions)
}

function question(e){
    const questionHeading=document.querySelector("[data-question]")
    // console.log(questionHeading.innerHTML);   
    questionHeading.innerHTML= questions[e].question;
   // list fo choices
   const choices=document.querySelectorAll("[data-choices]")
   console.log(choices[e].innerHTML);
   for(let i=0; i < choices.length; i++){
       choices[i].innerHTML=questions[e].option[i]
   }      

}

function NextQuestion(){
   listOfQuestions++
       removeClass()
   question(listOfQuestions) 
}
button.addEventListener('click', NextQuestion);

function activeClass(e){
    // console.log(e);
    removeClass()
   e.classList.add("active")
}
function removeClass(){
    const listtactiveClass=document.getElementsByClassName("active")
   console.log(listtactiveClass);
   for(let i=0; i<listtactiveClass.length; i++){
       listtactiveClass[i].classList.remove("active")
   }
}
function getAnswer(){
    
}