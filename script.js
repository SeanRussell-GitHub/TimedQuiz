document.getElementById("score").innerHTML = localStorage.getItem('scoreBoard');
document.getElementById('timedOut').style.display = "none";
// array of questions and answers
let allQuestions = [
    {
        question: "what does js stand for?",
        choices: ['Jump Station', 'Jarvis', 'Java Script', 'do not know'],
        correctAnswer: 'Java Script'
    },
    {
        question: "do you have to link an exterior js file?",
        choices: ['yes', 'no', 'only when linking to CSS file also', 'do not know'],
        correctAnswer: 'yes'
    },
    {
        question: "what set of operators indicates an array?",
        choices: ['[]', '()', '{}', 'do not know'],
        correctAnswer: '[]'
    },
    {
        question: "how many days was JavaScript built in?",
        choices: ['73', '364', '10', '42'],
        correctAnswer: '10'
    },
    {
        question: "GAME OVER"
    }
];

//global variables
let scoreBoard = document.getElementById('score');
let questionTitle = document.getElementById('questionTitle');
let selectionList = document.getElementById('selectionList');
let nextButton = document.getElementById('nextButton');
let i = 0;
let length1 = allQuestions.length;
let answeredCorrect = 0;
let seconds = 15;
let score = 0;

//start button to begin the game when player is ready
startButton.onclick = function next() {
    $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's');
        if (seconds-- > 0) setTimeout(countdown, 1000);
        if (seconds < 0) {
            noScore();
        }
    })();
    document.getElementById("strtBttn").style.display = "none";
    document.getElementById("scndDiv").style.display = "block";
    populateQuestion(i); i++;
    
    //starts the game AND submits the answer AND pops the next Q / A
    nextButton.onclick = function () {
        endGame();
        populateQuestion(i);
        console.log(i);
        if (i >= 4){
            gameOver();
        }
        i++;
    };
};

//populates the question frame from the Q/A array
function populateQuestion() {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    //resets choices list
        selectionList.innerHTML = "";
        // console.log(length1);
        for (key in individualQuestion.choices) {
            var radioBtnName = "possibleAnswers";
            var choiceText = individualQuestion.choices[key];
            var createID = individualQuestion.choices[key];
            selectionList.appendChild(createLi(radioBtnName, choiceText,createID));
        }
    }
    
    //creating each line item for the multiple choice answers
    function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioHtml = '<input type="checkbox" name="' + name + '" id="' + choiceText + '"';
        radioHtml += '/>';
        radioHtml += choiceText;
        e.innerHTML = radioHtml;
        console.log();
        return e;
    }
    
    
    function endGame() {
        let userChoices = document.getElementsByName('possibleAnswers');
        let userChoice;
        let checkAnswer = allQuestions[i-1].correctAnswer;
        console.log(checkAnswer);
        if (length1 > 5) {
            gameOver();
        }
        for (let i = 0; i < userChoices.length; i++) {
            if (userChoices[i].checked) {
                userChoice = userChoices[i].id
                console.log('checked: ', userChoice);
                if(userChoice == checkAnswer){
                    console.log('hit if inside if')
                    answeredCorrect +1;
                    console.log(answeredCorrect);
                    score = seconds;
                    console.log(score);
                } else{
                    seconds = seconds-5;
                    score = seconds;
                    console.log(score);
                }
            }
        }
    }

// sets up for game over    
    function gameOver(seconds){
        // document.getElementById("body").style.display = "";
        document.getElementById("scndDiv").style.display = "none";
        document.querySelector('#countdown').style.display = "none";
        highScore();
    }
    
// preparing for high score
    function highScore (seconds){
        console.log(score+1);
        // prompt for initials / show score / add initials and score to local storage 
        var initials = prompt('Enter your initials for high score:','AAA');
        console.log(initials);
        const scoreBoard = document.getElementById('score');
        scoreBoard.textContent = " High score:  " + initials + "      =  " + score;
        document.body.appendChild(scoreBoard); 
        localStorage.setItem('scoreBoard',scoreBoard.textContent);
        window.location.href = "file:///C:/Users/email/TimedQuiz/index.html";
    }

    //saving the high score to local storage
    function noScore () {
        document.getElementById("timedOut").style.display = "block";
        document.getElementById('questionTitle').style.display = "none";
        document.getElementById("scndDiv").style.display = "none";
        document.querySelector('#countdown').style.display = "none";
        document.getElementById('selectionList').style.display = "none";
       let timeOut = document.getElementById('timedOut');
       timeOut.innerHTML += 'Timed Out ' + '<br>' + 'Game Over' + '<br>' + 'No Score for 0 seconds';
    }
