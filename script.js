let allQuestions = [
    {
        question: "what does js stand for?",
        choices: ['Jump Station', 'Jarvis', 'Java Script', 'do not know'],
        correctAnswer: 2
    },
    {
        question: "do you have to link an exterior js file?",
        choices: ['yes', 'no', 'only when linking to CSS file also', 'do not know'],
        correctAnswer: 0
    },
    {
        question: "what set of operators indicates an array?",
        choices: ['[]', '()', '{}', 'do not know'],
        correctAnswer: 0
    },
    {
        question: "how many days was JavaScript built in?",
        choices: ['73', '364', '10', '42'],
        correctAnswer: 2
    },
    function() {
        document.body.innerHTML="";
        document.body.innerHTML="END OF QUIZ";
    }
];



//Reference to tags
var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');

//Initiating some variables
var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;


//needs work
function submit() {
    var seconds = 60, $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 1000)
    })();
}
//needs work

startButton.onclick = function submit() {
    var seconds = 60, $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 1000)
    })();
    document.getElementById("strtBttn").style.display = "none";
    document.getElementById("scndDiv").style.display = "block";
    populateQuestion(i); i++;


    nextButton.onclick = function () {
        populateQuestion(i);
        i++;
    };
    for (let i = 0; i < allQuestions.length; i++) {
        console.log(allQuestions[i]);
    }
};

function populateQuestion() {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    
    selectionList.innerHTML = ""; //reset choices list
    for (key in individualQuestion.choices) {
        var radioBtnName = "question" + i + "_choice";
        var choiceText = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName, choiceText));
    }
}

function createLi(name, choiceText) {
    var e = document.createElement('li');
    var radioHtml = '<input type="radio" name="' + name + '"';
    radioHtml += '/>';
    radioHtml += choiceText;
    e.innerHTML = radioHtml;
    return e;
}

function highScore(score) {
    var saved = 0;
    try { saved = parseFloat(localStorage.highScore); } catch (e) { saved = 0; }
    if (!(typeof score === 'undefined')) {
       try { score = parseFloat(score); } catch (e) { score = 0; }
       if (score>saved) {
         saved = score;
         localStorage.highScore = '' + score;
       }
    }
    if (isNaN(saved)) {
       saved = 0;
       localStorage.highScore = '0';
    }
    return saved;
 }
