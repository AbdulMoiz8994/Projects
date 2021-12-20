let miniSeconds=0;
let seconds=0;
let minutes=0;
let hours=0;

let watchHours=document.getElementById("headingHours");
let watchMinutes=document.getElementById("headingMinutes");
let watchSeconds=document.getElementById("headingSeconds");
let watchMiniSeconds=document.getElementById("headingMiniSeconds");
let interval;
let resultarr=[];


function timer(){
    miniSeconds++;
    if(miniSeconds < 10){
      miniSeconds= "0"+miniSeconds
    }
    watchMiniSeconds.innerHTML=miniSeconds;
    if(miniSeconds >= 100){
        seconds++
        if(seconds < 10){
            seconds="0"+seconds
        }
        watchSeconds.innerHTML=seconds
        miniSeconds=0;
    }else if(seconds >= 60){
        minutes++
        if(minutes < 10){
            minutes = "0"+minutes
            console.log(minutes);
        }
        watchMinutes.innerHTML=minutes;
        seconds=0;
    }else if(minutes >=60){
         hours++
         if(hours < 10){
             hours="0"+hours
         }
         watchHours.innerHTML=hours
         minutes=0;
    } 

}

const btnstarter=document.querySelector("#btnStart");
const btnPause=document.querySelector("#btnPause");
const btnReset=document.getElementById("btnReset");
const btnsavRec=document.getElementById("btnSavRec");
const btnViewRec=document.getElementById("btnViewRec");
const btnClearRec=document.getElementById("btnClearRec");
console.log(btnstarter);

function StartTimer(){
    // the setInterval runs every 10 miliseconds
    interval=setInterval(timer,10);
     btnstarter.disabled=true;
}
btnstarter.addEventListener('click',StartTimer)

// pause timer vai clearInterval
function pauseTimer(){
    // we get he reference of variable inerterval and clear it
    if(watchMiniSeconds.innerHTML === "00"){
        alert("There is no Record to Pause")
    }
    clearInterval(interval);
    btnstarter.disabled=false
};
btnPause.addEventListener('click', pauseTimer);


// reset the Timer
function resetTimer(){
    if(watchMiniSeconds.innerHTML === "00"){
        alert("There is no Record to Reset")
    }
    hours=0;
    minutes=0;
    seconds=0;
    miniSeconds=0;
    watchHours.innerHTML="00";
    watchMinutes.innerHTML="00";
    watchSeconds.innerHTML="00";
    watchMiniSeconds.innerHTML="00";
}
btnReset.addEventListener('click',resetTimer);

function saveRecord(){
    if(watchMiniSeconds.innerHTML === "00"){
        alert("There is no Record to save! \nPlease Run the Timer first")
    }else{
        alert("Your Record has been Saved Successfully");
        let result=`${watchHours.innerHTML} Hour(s) ${watchMinutes.innerHTML} Minute(s) ${watchSeconds.innerHTML} Second(s) ${watchMiniSeconds.innerHTML} Mili Seconds`;
        resultarr.push(result);
        console.log(result);
        console.log(resultarr);
        resetTimer();
    }
}
btnsavRec.addEventListener('click',saveRecord)


function viewResult(){
    if(resultarr.length > 0){
     let record= "Last Save Record Are \n"
     let count=1;
     for(let i=0; i< resultarr.length; i++){
       record +=  `${count}) ${resultarr[i]} `  
       count++
     };
     console.log(record);
     alert(record)       
    }else{
        if(watchMiniSeconds.innerHTML == "00"){
            alert("No Record Found!")
        }
    }
}
btnViewRec.addEventListener('click',viewResult);

function clearRecords(){
    if(resultarr.length> 0){
        resultarr=[];
    alert("All The Data Has Been Deleted SuccessFully");
    resetTimer();
    }else{
        if(watchMiniSeconds.innerHTML == "00"){
           alert("There is No Record to Delete")
        }
    }
}
btnClearRec.addEventListener('click',clearRecords)