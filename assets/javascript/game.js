window.onload = function() {
    $("#start").click(start);
}  
var number = 100;
var intervalId;
var isClockRunning = false;
function start() {
    if (isClockRunning === false) {
        intervalId = setInterval(decrement, 1000);
        isClockRunning = true;
    }
}
function decrement(){
    number--;

    $("#show-time").html(number);

    if (number === 0) {

      stop();

      alert("Time Up!");
    } 
}


