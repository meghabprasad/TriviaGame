window.onload = function() {   
    
    $("#start").click(start);

    var number = 100;
    var intervalId;
    var isClockRunning = false;
    var questionCount = 0;
    var score = 0;
    // var questionAnswer = {
    //     questionsList: ["What is Dwight's last name?", "What is Jim's last name?"],
    //     answersList: ["Shrute", "Halpert"]
    // }

    var questionAnswer = [
        {
            question: "What is Dwight's last name?",
            possibleAnswers: [{a: "Angel", v: "f"},{a: "Shrute", v: "t"}],
            correctAnswer: "Shrute"
        },
        {
            question: "What is Jim's last name?",
            possibleAnswers: [{a: "scott", v: "f"},{a: "Shroot", v: "t"}]
        }
    ]
    
    function start() {
        //("#questions").empty(); 
        if (isClockRunning === false) {
            intervalId = setInterval(decrement, 1000);
            showQuestion()
            isClockRunning = true;
        }
    
    }//ends start function

    function showQuestion(){
        // step one
            // check to see if questionCounter is < the questionAnswer array length
            // if it is
                //make a variuable call questionDiv
                //make a variable called questison and assign it to the questionAnswer index 'questionCounter` value
                //make a variuable call questionH1 and assigning it the text value of the question vaiable;
                //loop throgh the possibleAnswers value and dynamically generate check boxes for each possible answer with a data-correct atribute with the value of 'v' 
                // append the questionDiv to the demo element with the id of main-content
            // if it is not then 
                //add up score and tell use game is over. 
        if (questionCount < questionAnswer.length){
            var questionDiv = $('<div class = "questions">'); 
            var questionAnswerPair = questionAnswer[questionCount];
            var question = questionAnswerPair.question;
            console.log(question)
            var questionH1 = $('<h1>');
            questionH1.text("Quesion: " + question);
            questionDiv.append(questionH1)
            
            var answersArray = questionAnswerPair.possibleAnswers;
            console.log(answersArray);

            for (var i=0; i < answersArray.length; i++){
                console.log(answersArray[i].v);
                console.log(answersArray[i].a);
                label = answersArray[i].a;
                var checkbox = $('<button class="options">'+label+'</button>');
                checkbox.attr("data-correct", answersArray[i].v)
                questionDiv.append(checkbox);    
            }
            $("#main-content").append(questionDiv);
            questionCount++;
            console.log(questionCount);
        }else{
            score++;
            alert("game over!");
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


    $(document).on("click","form-check-input", function(){
        var value = $(this).val();
        console.log(value);
    }) 
        // $("#questions").append("<p>What country produces the most potatoes?</p>");
        // $("#questions").append("<button>China</button> <button>US</button> <button>Ireland</button> <button>Russia</button> ");
        // $("#questions").append("<p>According to a 1980s Beverage Media poll of four hundred bartenders, what was the female customers favorite drink?</p>");
        // $("#questions").append("<button>Beer</button> <button>Margarita</button> <button>White Wine</button> <button>Pina Colada</button> ");
}
  








 



