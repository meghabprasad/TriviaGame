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
    $("#questions").append("<p>Which of the following vegetables is not one of the ingredients of V-8 juice?</p>");
    $("#questions").append("<p>What country produces the most potatoes?</p>");
    $("#questions").append("<p>According to a 1980s Beverage Media poll of four hundred bartenders, what was the female customers favorite drink?</p>");
}
function decrement(){
    number--;

    $("#show-time").html(number);

    if (number === 0) {

      stop();

      alert("Time Up!");
    } 
}


