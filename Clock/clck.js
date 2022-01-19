var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    //* Set Hours
    if(hours >= noon){
        meridian = "PM";
    }
    if(hours > noon){
        hours = hours - 12;
    }
    //* Set Minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    //* Set Seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    //? put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

//! Getting the clock to increment on its own and manipulate messages

var updateClock = function(){
    var time = new Date().getHours();
    var messageText;
    
    var timeEventJs = document.getElementById("timeEvent");

    if(time == partytime){
        messageText = "Let's Party";
    }else if(time == wakeuptime){
        messageText = "wake up!";
    }else if(time == lunchtime){
        messageText = "Let's Grab Some lunch";
    }else if(time == naptime){
        messageText = "Sleep Tight";
    }else if(time < noon){
        messageText = "Good Morning!";
    }else if(time >= evening){
        messageText = "Good Evening";
    }else{
        messageText = "Good Afternoon!";
    }
    console.log(messageText);
    timeEventJs.innerText = messageText;

    showCurrentTime();
};
updateClock();

//* Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//* Getting the schedule button to work
var chkButton = document.getElementById("checkButton");

var chkEvent = function() {
    if(partytime < 0){
        partytime = new Date().getHours();
        checkButton.innerText = "U r on schedule!";
        checkButton.style.backgroundColor = "lightgreen";
    }else{
        partytime = -1;
        checkButton.innerText = "check schedule";
        checkButton.style.backgroundColor = "#222";
    }
};
chkButton.addEventListener("click", chkEvent);
chkEvent();

//! Activate Wake-up Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function(){
    wakeuptime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//! Activate lunch time Selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function() {
    lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchTimeEvent);

//! Activate Nap time Selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function(){
    naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napTimeEvent);