const rain = document.getElementById("rain");
const beach = document.getElementById("beach");
const startStop = document.getElementById("play");
const min2 = document.getElementById("min2");
const min5 = document.getElementById("min5");
const min10 = document.getElementById("min10");
const time = document.getElementsByTagName("h3")[0];
const song = document.getElementById("song");
const video = document.getElementById("video");
let duration = 600;
let clear; //use for clearTimeout

//two functions to make the time goes on 
function countDown(dur){
    time.innerHTML = Math.floor(dur/60) + ":" + Math.floor(dur%60);
    countDown2(duration);
}
function countDown2(dur2){
    duration = dur2 - 1;
    if (duration < 0){
        clearTimeout(clear);
        song.pause();
        video.pause();
        startStop.src = "./svg/play.svg";
        hear = 0;
        duration = 600;
        time.innerHTML = "0:0";
    }else{
    clear = setTimeout(countDown, 1000, duration);
    }
}


let hear = 0; 
startStop.onclick = function(){
    if (hear == 0){
        song.play();
        video.play();
        startStop.src = "./svg/pause.svg";
        hear = 1;        
        countDown(duration);    
    }else {
        clearTimeout(clear);
        song.pause();
        video.pause();
        startStop.src = "./svg/play.svg";
        hear = 0;
    }    
}

rain.onclick = function(){
    video.src = "./video/rain.mp4";
    song.src = "./sounds/rain.mp3"
    if (hear == 1){
        song.play();
        video.play();
    }
}

beach.onclick = function(){
    video.src = "./video/beach.mp4";
    song.src = "./sounds/beach.mp3";
    if (hear == 1){
        song.play();
        video.play();
    }
}

min2.onclick = function(){
    clearTimeout(clear);
    duration = 120;
    time.innerHTML ="2:00";
    song.pause();
    video.pause();
    startStop.src = "./svg/play.svg";
    hear = 0;
}

min5.onclick = function(){
    clearTimeout(clear);
    duration = 300;
    time.innerHTML ="5:00";
    song.pause();
    video.pause();
    startStop.src = "./svg/play.svg";
    hear = 0;
}

min10.onclick = function(){
    clearTimeout(clear);
    duration = 600;
    time.innerHTML ="10:00";
    song.pause();
    video.pause();
    startStop.src = "./svg/play.svg";
    hear = 0;
};
