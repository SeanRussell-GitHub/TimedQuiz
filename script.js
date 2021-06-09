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
let questionTitle = document.getElementById('questionTitle');
let selectionList = document.getElementById('selectionList');
let nextButton = document.getElementById('nextButton');
let i = 0;
let length1 = allQuestions.length;
let answeredCorrect = 0;
let seconds = 60;


//start button to begin the game when player is ready
startButton.onclick = function next() {
    $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 1000)
    })();
    document.getElementById("strtBttn").style.display = "none";
    document.getElementById("scndDiv").style.display = "block";
    populateQuestion(i); i++;

    //starts the game AND submits the answer AND pops the next Q / A
    nextButton.onclick = function () {
        endGame();
        populateQuestion(i);
        i++;
    };
};



//populates the question frame from the Q/A array
function populateQuestion() {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;

    //resets choices list
    selectionList.innerHTML = "";
    for (key in individualQuestion.choices) {
        var radioBtnName = "possibleAnswers";
        var choiceText = individualQuestion.choices[key];
        var createID = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName, choiceText,createID));
        // console.log(choiceText);
        // console.log(key);
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
    for (let i = 0; i < userChoices.length; i++) {
        // console.log(userChoices[i]);
        
        if (userChoices[i].checked) {
            userChoice = userChoices[i].id
            console.log('checked: ', userChoice);
            if(userChoice == checkAnswer){
                console.log('hit if inside if')
                answeredCorrect +1;
                console.log(answeredCorrect);
            } else{
                // -time
            }

        }
        // console.log(correctAnswer)
    }

}
// End game function -- if (seconds <=0) {
//  endGame ()}
// prompt for initials / show score / add initials and score to local storage 



//saving the high score to local storage
//needs work


// function highScore(score) {
//     var saved = 0;
//     try { saved = parseFloat(localStorage.highScore); } catch (e) { saved = 0; }
//     if (!(typeof score === 'undefined')) {
//        try { score = parseFloat(score); } catch (e) { score = 0; }
//        if (score>saved) {
//          saved = score;
//          localStorage.highScore = '' + score;
//        }
//     }
//     if (isNaN(saved)) {
//        saved = 0;
//        localStorage.highScore = '0';
//     }
//     return saved;
//  }
