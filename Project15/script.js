// get all elements
const bayan=document.getElementById("bayan");
const seats=document.querySelector(".seats");
const specificSeat=document.querySelectorAll(".rows .seat");
const count=document.getElementById("count");
const total=document.getElementById("total");

// console.log(bayan);
console.log(seats);
let selectScholar=+bayan.value
// console.log(selectScholar);

function updateSeats(){
    if(bayan.value !== ''){
    //   get all the seats that are selected 
    // console.log(bayan.value);
    const selectedSeats=document.querySelectorAll(".rows .selected");
    // console.log(selectedSeats);
    const getIndex=[...selectedSeats].map((seat) => [...specificSeat].indexOf(seat));
    // console.log(getIndex);
      const lengthgetIndex=getIndex.length;
    //   console.log(lengthgetIndex);
      count.innerHTML=lengthgetIndex;
      total.innerHTML=lengthgetIndex* selectScholar;    
        //  console.log(selectScholar);
    }
}
seats.addEventListener('click',(e) =>{
    console.log(e.target.classList.contains("seat"));
    if(bayan.value !== ''){
        if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
             e.target.classList.toggle("selected")
             updateSeats()
        }
    }

})



bayan.addEventListener('change',(e) =>{
    //   console.log(e.target.value);
       selectScholar=e.target.value
    updateSeats();
})



updateSeats();


