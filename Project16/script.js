// get the dom Elements

let video=document.getElementById("video");
let play=document.getElementById("play");
const cleanStop=document.getElementById("stop");
let progress=document.getElementById("progress");
const timeStamp=document.getElementById("time");
const toggle=document.querySelector(".toggle");
// console.log(toggle);

// make the video update
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause()
    }
}


function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fas fa-play fa-2x"></i>';
    }else{
         play.innerHTML='<i class="fas fa-pause fa-2x"></i>';
    }
}

// create Function to update the progress
function setVideoProgress(){
    // the progress.value goes to 0 to 100
    progress.value=(video.currentTime / video.duration) * 100
    // set Time stamp
    // get totalTime
       const getFullTime=Math.floor((video.duration / 60));
       const getFullSeconds=Math.floor(video.duration % 60);
    //    console.log(video.duration , 60);
    // console.log(getFullTime);
    // get mins
    const mins= Math.floor(video.currentTime / 60)
    // console.log(mins);
    // get seconds
    const seconds=Math.floor(video.currentTime % 60);
    // console.log(seconds);
    timeStamp.innerHTML=`${seconds < 10 ? `${mins}:0${seconds}`: `${mins}:${seconds}`}/ ${getFullTime < 10 ? `0${getFullTime}:${getFullSeconds}`: {getFullTime}}`   
   
}


// create function to stop the video
function StopTheVideo(){
    video.currentTime=0;
    video.pause();
}
// create function to update the video progress using slider
function changeProgress(){
    // console.log(video.duration);
    //  console.log(Math.floor(+progress.value * video.duration) / 100);
     video.currentTime=Math.floor(+progress.value * video.duration) / 100;
};


video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',setVideoProgress);

// Event Listener for Play Button;
play.addEventListener('click',toggleVideoStatus);
// Event Listener for stop the video to initial State
cleanStop.addEventListener('click',StopTheVideo);
//  Event Listener for Increase the progress
progress.addEventListener('change',changeProgress);
// Event Listener;
