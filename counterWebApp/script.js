// Get DOM Elements
const all_counter=document.querySelectorAll(".counter");
// console.log(all_counter);
all_counter.forEach(counter => {
    // console.log(counter);
    counter.innerHTML=0;
    const counterupdate=() =>{
       const counterAttrVal=+counter.getAttribute("data-target")
       console.log(counterAttrVal);
       const StartingValue=+counter.innerHTML
    //    console.log(StartingValue);
        const inc=Math.floor(counterAttrVal / 80) 
        // console.log(inc);
       if(StartingValue < counterAttrVal){
           counter.innerHTML= StartingValue+inc;
           console.log(counter.innerHTML);
         setTimeout(counterupdate, 20) 
    }else{
        counter.innerHTML=counterAttrVal
    } 
    }
    
    
    counterupdate()
});