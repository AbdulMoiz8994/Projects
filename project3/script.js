const counters=document.querySelectorAll('.counter')
// console.log(counters);

counters.forEach((counter,ind,arr) =>{
        // console.log(counter);
      counter.innerHTML=0  

const updateCount=() =>{
        const targetValue=+counter.getAttribute('data-target') 
        // console.log(+targetValue);
        const StartCounting=Number(counter.innerHTML)
        // console.log(StartCounting);
          let incr=targetValue /80
        if(StartCounting < targetValue){
            counter.innerHTML= StartCounting + incr
            setTimeout(updateCount,20)
        }else{
                counter.innerHTML=targetValue
        }
}
updateCount()
       
})
