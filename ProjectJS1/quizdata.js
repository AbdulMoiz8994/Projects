

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

let questionNub=0;
let score=0;

let load=document.querySelector('body')
console.log(load);
load.onload=function(){
    question(questionNub)  
}
function question(e){
    console.log(e);
    const questionHeading=document.querySelector('#questionHeading')
    // console.log(questionHeading.innerHTML);
    console.log(questions);
    questionHeading.innerHTML=questions[e].question
// take the list of  options
 let optionList=document.getElementsByClassName('optionElement')
console.log(optionList.length);
//    optionList[].innerHTML="ok google"
for(let i=0; i< optionList.length; i++){
    optionList[i].innerHTML=questions[e].option[i]
}    
}

function nextQuestion(){
    getAnswer(questionNub)
    questionNub++;
    Score()
    removeactiveClass();
    question(questionNub);   
}
question(questionNub)

function activeClass(e){
    //   console.log(e);
    removeactiveClass()
     e.classList.add('activeFunc')
}
function removeactiveClass(){
const getactiveclass=document.getElementsByClassName('activeFunc')
 console.log(getactiveclass);
  for(let i=0; i < getactiveclass.length;i++){
      getactiveclass[i].classList.remove('activeFunc');
  }
}
function getAnswer(e){
    const activeclassForAns=document.getElementsByClassName('activeFunc')
     console.log(activeclassForAns.length); 
  for(let i=0; i < activeclassForAns.length; i++){
    console.log(activeclassForAns[i].innerHTML,questions[e].answer);
      if(activeclassForAns[i].innerHTML == questions[e].answer){
           console.log(questions[e].answer);
           console.log(score+=10);
      }else{
          console.log("false");
      }
  }
}
function Score(){
   if(questionNub >= 5){
       alert(score)
   }
}