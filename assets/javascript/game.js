window.onload = function() { 
    $("#start").on("click", function () {
        var number = 11;
        var intervalId;
        var intervalIdQuestion;
        var isClockRunning = false;
        var questionCount = 0;
        var score = 0;
        var correct = 0;
        var wrong = 0;
        var questionDiv = $('<div class = "questions">'); 
        var responseDiv = $('<div id = "response">');
        


        var questionAnswer = [
            {
                question: "What is the name of Ryan's social networking venture?",
                possibleAnswers: [{a: "RUFPH.COM", v: "f"},{a: "BARQ.COM", v: "f"},{a: "WUPHF.COM", v: "t"},{a: "ARPHF.COM", v: "f"}],
                correctAnswer: "Shrute"
            },
            {
                question: "Which of the following was NOT included in the teapot Jim gave Pam at the office Christmas party?",
                possibleAnswers: [{a: "Hot sauce packet", v: "f"},{a: "Golf pencil", v: "f"},{a: "Jim's yearbook picture", v: "f"},{a: "Baseball card", v: "t"}],
            },
            {
                question: "What is the number Kevin invents to compensate for his accounting errors?",
                possibleAnswers: [{a: "Thirtween", v: "f"},{a: "Dundereight", v: "f"},{a: "Slevin", v: "f"},{a: "Keleven", v: "t"}],
            },
            {
                question: "Dwight Schrute plays which of the following musical instruments?",
                possibleAnswers: [{a: "Recorder", v: "f"},{a: "Harpsichord", v: "f"},{a: "Piano", v: "f"},{a: "Banjo", v: "t"}],
            },
            {
                question: "Which Dunder Mifflin salesman did Pam date before Jim?",
                possibleAnswers: [{a: "Clark Green", v: "f"},{a: "Andy Bernard", v: "f"},{a: "Jim Holland", v: "f"},{a: "Roy", v: "t"}],
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
            $(".questions").append('<div style = "color: blue">Time up! Next question!</div>') 
            questionCount++; 
            wrong++      
            restart();   
            } 
        } 
        function restart(){
            clearInterval(intervalId);
            isClockRunning = false;
            number=11;
            var intervalIdQuestion = setTimeout(start, 2000);
        }
        function stop(){
            $(".questions").empty();
            clearInterval(intervalId);
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
                    var checkbox = $('<button type="button" class="btn btn-primary '+answersArray[i].v+'+">'+label+'</button>'+'<br><br>');
                    
                    checkbox.attr("data-correct", answersArray[i].v)
                    
                    questionDiv.append(checkbox);    
                }
                
                $("#main-content").append(questionDiv);
                $(".btn").on("click", function(){ 
                    
                if ($(this).attr("data-correct") === "t"){
                        $(this).attr("class", "btn btn-success");
                        //$("#response").append("<br>"+"Awesome!");
                        correct++;
                        console.log("numCorrect: "+correct);
                        console.log("numWrong: "+wrong);
                        //$("#response").append("<br>"+correct); 
                          
                    }
                    else if ($(this).attr("data-correct") === "f"){
                        $(this).attr("class", "btn btn-danger");
                        $(".t").attr("class", "btn btn-succes t");
                        //$("#response").append("<br>"+"Wrong!");
                        wrong++;
                        console.log("numCorrect: "+correct);
                        console.log("numWrong: "+wrong);
                        //$("#response").append("<br>"+wrong);
                          
                    }
                    questionDiv.append(responseDiv);
                    $("#main-content").append(questionDiv);
                    questionCount++;
                    restart();
                })
                console.log("questionCount: "+questionCount);
            }else{
                questionCount = 0;
                restart();
                $(".questions").append("Game Over");
                $(".questions").append("<br>"+"Number of Correct Answers: "+correct);
                $(".questions").append("<br>"+"Number of Wrong Answers: "+wrong);
            }        
        }
        function showAnswer (){
            $("#response").append("RESPONSEEEE");
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
  








 



