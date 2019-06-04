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
            possibleAnswers: [{a: "angel", v: "f"},{a: "Shroot", v: "t"}]
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
    //     $("#questions").append("<p>Which of the following vegetables is not one of the ingredients of V-8 juice?</p>");
    //     $("#questions").append(
    //         '<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"><label class="form-check-label" for="inlineCheckbox1">Cabbage</label></div>');
    }//ends start function

    function showQuestion(){
        // stepo one
            // check to see if questionCounter is < the questionAnswer array length
            // if it is
                //make a variuable call questionDiv
                //make a variable called questison and assign it to the questionAnswer index 'questionCounter` value
                //make a variuable call questionH1 and assigning it the text value of the question vaiable;
                //loop throgh the possibleAnswers value and dynamically generate check boxes for each possible answer with a data-correct atribute with the value of 'v' 
                // append the questionDiv to the demo element with the id of main-content
            // if it is not then 
                //add up score and tell use game is over. 
    }
        function newFunction() {
            and;
            append;
            it;
            to;
            the;
            dom;
            where;
            the;
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

  







};
 



