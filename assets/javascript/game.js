window.onload = function() { 
    $("#start").on("click", function () {
        var number = 10;
        var intervalId;
        var intervalIdQuestion;
        var isClockRunning = false;
        var questionCount = 0;
        var score = 0;
        var correct = 0;
        var wrong = 0;
        var questionDiv = $('<div class = "questions">'); 

        var questionAnswer = [
            {
                question: "What is Dwight's last name?",
                possibleAnswers: [{a: "Angel", v: "f"},{a: "Shrute", v: "t"}],
                correctAnswer: "Shrute"
            },
            {
                question: "What is Jim's last name?",
                possibleAnswers: [{a: "Scott", v: "f"},{a: "Halpert", v: "t"}]
            }
        ]
        function start() {
            //("#questions").empty(); 
            if (isClockRunning === false) {
                intervalId = setInterval(decrement, 1000);
                showQuestion();
                isClockRunning = true;
            }
        } 
        function decrement(){
            number--;
    
            $("#show-time").html(number);
    
            if (number === 0) {
            $(".questions").append("Time up! Next question!") 
            questionCount++;       
            restart();   
            } 
        } 
        function restart(){
            clearInterval(intervalId);
            isClockRunning = false;
            number=10;
            start();
        }
        function stop(){
            clearInterval(intervalId);
            isClockRunning = false;
        } 
        function showQuestion(){
            $(".questions").empty();
            
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
                
                $(".options").on("click", function(){
                    var response = $('<div id="response">');    
                if ($(this).attr("data-correct") === "t"){
                        $("#response").append("<br>"+"Awesome!");
                        correct++;
                        console.log("numCorrect: "+correct);
                        console.log("numWrong: "+wrong);
                        response.append("<br>"+correct); 
                        $(".questions").append(response);   
                    }
                    else if ($(this).attr("data-correct") === "f"){
                        response.append("<br>"+"Wrong!");
                        wrong++;
                        console.log("numCorrect: "+correct);
                        console.log("numWrong: "+wrong);
                        response.append("<br>"+wrong);
                        $(".questions").append(response);   
                    }
                    questionCount++;
                    restart();
                })
                console.log("questionCount: "+questionCount);
            }else{
                stop();
                $(".questions").append("Game over");
            }        
        }
        
        start();

        // while(number>0){
        //     showQuestion();
        //     questionCount++;
        // }
    }) 
    // var questionAnswer = {
    //     questionsList: ["What is Dwight's last name?", "What is Jim's last name?"],
    //     answersList: ["Shrute", "Halpert"]
    // }

    
    
    
    
    
    
    

    

    


    // $(document).on("click","form-check-input", function(){
    //     var value = $(this).val();
    //     console.log(value);
    // }) 
        // $("#questions").append("<p>What country produces the most potatoes?</p>");
        // $("#questions").append("<button>China</button> <button>US</button> <button>Ireland</button> <button>Russia</button> ");
        // $("#questions").append("<p>According to a 1980s Beverage Media poll of four hundred bartenders, what was the female customers favorite drink?</p>");
        // $("#questions").append("<button>Beer</button> <button>Margarita</button> <button>White Wine</button> <button>Pina Colada</button> ");
}
  








 



