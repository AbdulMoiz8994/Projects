const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// select item from dom elements

const card= document.getElementsByClassName('card');
const auther=document.getElementById('auther');
const job=document.getElementById('job');
const info=document.getElementById('info')
const prsonimg=document.getElementById('prson-img')
// console.log(prsonimg.src);

// get the previous and next button
const prebtn=document.getElementsByClassName('pre-btn')
const nextbtn=document.getElementsByClassName('nest-btn')
console.log(prebtn[0]);
// console.log(nestbtn[0]);

// set starting each item
let currentTime=0;

window.addEventListener('DOMContentLoaded', function() {
       const item=reviews[currentTime]
       console.log(item);
       prsonimg.src=item.img;
       auther.innerHTML=item.name;
       job.innerHTML=item.job;
        info.innerHTML=item.text;
})
const showPerson=(person)=>{
      const items=reviews[person];
      prsonimg.src=items.img;
      auther.innerHTML=items.name;
      job.innerHTML=items.job;
       info.innerHTML=items.text;
      
}


nextbtn[0].addEventListener('click',function(){
    currentTime++;
    if(currentTime > reviews.length -1){
        currentTime=0;
    }      
    showPerson(currentTime)
})

prebtn[0].addEventListener('click',function (){
  currentTime--;
  if(currentTime < 0){
      currentTime=reviews.length -1;
  }
  console.log(currentTime);
  showPerson(currentTime)  
})
