const video=document.querySelector("[data-video]");
let btn_play=document.getElementById("btn_play");
const btn_Restart=document.getElementById("btn_stop");
const inputRange=document.querySelector("#inputRange");
const timeStamp=document.getElementById("time");
console.log(btn_play.innerHTML);

function toggleVideoFunc(){
  if(video.paused){
      video.play()
  }else{
      video.pause()
  }    
}
function updateIcons(){
    if(video.paused){
        btn_play.innerHTML=`<i class="fas fa-play"></i>`
    }else{
        btn_play.innerHTML=`<i class="fas fa-pause"></i>`        
    }
}

function updateProgress(){
    // console.log((video.currentTime / video.duration) * 100);
    // it will increase 0 to 100 percantage vise obt / total than *100
    inputRange.value=(video.currentTime / video.duration) * 100; 

// calculate the current time in mints and seconds
const currentMints=Math.floor(video.currentTime / 60);
//    console.log(currentMints);
const currentSeconds=Math.floor(video.currentTime % 60);
// console.log(currentSeconds);
  

//    calculate total Duration in minutes
    const minutes=Math.floor(video.duration / 60);
    // console.log(minutes);
    const seconds=Math.floor(video.duration % 60);
    // console.log(seconds);
    if(minutes < 10 && currentSeconds < 10){
        timeStamp.innerHTML= `0${currentMints}:0${currentSeconds}/0${minutes}:${seconds}`
    }else{
        timeStamp.innerHTML=`0${currentMints}:${currentSeconds}/0${minutes}:${seconds}`
    }
}

function ResetFunc(){
    video.currentTime=0;
    video.pause();
} 

function updateInputPRogress(){
    // console.log(video.currentTime);
    // console.log((inputRange.value * video.duration) / 100);
    video.currentTime= (inputRange.value * video.duration) / 100
}



video.addEventListener('click', toggleVideoFunc);
video.addEventListener('pause', updateIcons);
video.addEventListener('play', updateIcons);
video.addEventListener('timeupdate', updateProgress)
btn_play.addEventListener('click', toggleVideoFunc);
btn_Restart.addEventListener('click', ResetFunc);
inputRange.addEventListener('change', updateInputPRogress)
