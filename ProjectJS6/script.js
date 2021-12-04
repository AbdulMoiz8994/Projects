// get all dom elemnents
const slides=document.querySelectorAll('.slide');
const prevbtn=document.getElementById('prevbtn');
const nextbtn=document.getElementById('nextbtn');

slides.forEach((ele,ind) =>{
    ele.style.left=`${ind * 100}%`
})
let counter=0;

nextbtn.addEventListener('click',() =>{
   counter++
   carosul()
})
prevbtn.addEventListener('click',() =>{
    counter--
    carosul()
})

function carosul(){
   if(counter < slides.length -1){
       nextbtn.style.display="block"
   }else{
       nextbtn.style.display="none"
   }
   if(counter > 0){
      prevbtn.style.display="block" 
   }else{
       prevbtn.style.display="none"
   }
   slides.forEach((slide,ind) =>{
       console.log(slide, counter);
      slide.style.transform=`translateX(-${counter* 100}%)` 
   })
}

prevbtn.style.display="none"
