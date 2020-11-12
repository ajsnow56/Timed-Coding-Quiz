// GIVEN I am taking a code quiz

const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionContainer = document.querySelector("#question-container");
let questionIndex = 0;
const questionText = document.querySelector("#question-text");
const answerDiv = document.querySelector("#answers");
const firstBtn = document.querySelector("#btn1");
const secondBtn = document.querySelector("#btn2");
const thirdBtn = document.querySelector("#btn3");
const fourthBtn = document.querySelector("#btn4");
const highScore = document.querySelector("#high-score");
let score = 0;
const scoreTotal = document.querySelector("#score-total");
const scoreTotals = document.querySelector("#score-totals");
const answerDisplay = document.querySelector("#answer-display");
const scoreBoard = document.querySelector(".score-board");
const questionHeader = document.querySelector("#question-header");
const submitBtn = document.querySelector("#submit-btn");
const questions = [
        {
                header: "Question" + questionIndex,
                text: "Which abbreviation refers to the brain of the computer?",
                answers: ["GPU" , "CPU" , "RAM" , "OS"],
                correctIndex: 1,
                correctAnswer: "CPU",
        },
        {
                header: "Question" + questionIndex,
                text: "Lowering the frequency and thus power draw of your CPU or GPU is also called?",
                answers: ["overclocking" , "underclocking" , "overvolting" , "undervolting"],
                correctIndex: 3,
                correctAnswer: "undervolting",
        },
        {
                header: "Question",
                text: "Which is NOT a motherboard type?",
                answers: ["Micro-ATX" , "ITX" , "Mini-ETX" , "E-ATX"],
                correctIndex: 2,
                correctAnswer: "Mini-ETX",
        },
        {
                header: "Question",
                text: "Which is NOT a multiGPU config?",
                answers: ["Crossfire" , "SLI" , "NVLink" , "Dualforce"],
                correctIndex: 3,
                correctAnswer: "Dualforce",
        },
        {
                header: "Question",
                text: "Which is not a GPU manufacturer?",
                answers: ["GigaBit" , "Sapphire" , "Zotac" , "EVGA"],
                correctIndex: 0,
                correctAnswer: "Gigabit",
        },
        {
                header: "Question",
                text: "Which is fastest storage type?",
                answers: ["SSD" , "HDD" , "NVMe" , "SATA"],
                correctIndex: 2,
                correctAnswer: "NVMe",
        },
        {
                header: "Question",
                text: "Which is NOT a RAM type?",
                answers: ["SD" , "DSX" , "ECC" , "DDR"],
                correctIndex: 1,
                correctAnswer: "DSX",
        },
        {
                text: "TDP for CPU's and GPUs is measured in?",
                answers: ["Watts" , "Voltage" , "Frequency" , "Clockspeed"],
                correctIndex: 0,
                correctAnswer: "TDP",
        },
        {
                text: "Dual Channel- 3000Mhz refers to what?",
                answers: ["Storage" , "Memory" , "CPU" , "Power Supply"],
                correctIndex: 1,
                correctAnswer: "Memory",
        },
        {
                text: "What is processor speed measured in?",
                answers: ["Mbps" , "Core Count" , "MHz" , "Watts"],
                correctIndex: 2,
                correctAnswer: "MHz",
        }]
// WHEN I click the start button
startBtn.addEventListener("click", StartButton);
answerDiv.addEventListener("click", answerClick);
function StartButton () {
        startPrompt.style.display = "none";    
        questionContainer.style.display = "block";
        renderQuestion ();
        Timer ();

};
function answerClick (e) {
        const question = questions[questionIndex];
        const correctAnswer = question.answers[question.correctIndex];
        const userAnswer = e.target.textContent;

        if (userAnswer === correctAnswer) {
                answerDisplay.textContent = "Correct!"
                score++;
        
        } else {
                timeLeft -=10;
                answerDisplay.textContent = "Wrong...Sorry Dude"
        }
                questionIndex ++;
                console.log(correctAnswer)
                console.log(userAnswer)
                console.log(questionIndex)
                
                if (questionIndex == 10) {
                        HideQuestion ();
                        clearInterval(timeInterval);
                } else {
                        renderQuestion ();              
                }
        }
        

function renderQuestion() {
       const currentQuestion = questions[questionIndex];
       questionText.textContent = currentQuestion.text; 
       answerDiv.innerHTML = "";
        for (let i = 0; i < currentQuestion.answers.length; i++) {
                const answer = currentQuestion.answers[i];
                const btn = document.createElement("button")
                btn.textContent = answer;
                btn.setAttribute("class", "btn btn-primary")
                answerDiv.appendChild(btn);
                
        }};

function HideQuestion() {     
        questionContainer.style.display = "none";
        highScore.style.display = "block";
        timerEl.style.display = "none";
        scoreTotals.textContent = "Score: " + score;
        submitBtn.addEventListener("click", submitInitials);
}
function submitInitials (e) {
e.preventDefault();
let initials = document.querySelector("#initials")
let savedInitials = initials.value 
}
const timerEl=document.querySelector(".timer");
let timeLeft = 75;

function Timer() {
        var timeInterval = setInterval(function () { 
        scoreTotal.textContent = "Score: " + score;
        timerEl.textContent = "Countdown: " + timeLeft;
        timeLeft--;
        if (timeLeft <=0) {
                clearInterval(timeInterval);
                HideQuestion()
        }
        else if (questionIndex <= 10) {        
        }
         else {clearInterval(timeInterval);
        }
        console.log(timeLeft)
        
        }, 1000);
}
let highScores = JSON.parse(window.localStorage.getItem("leaderBoard")) || [];
const clearScores = document.getElementById("clearscores");
var leaderBoard = document.getElementById("leaderboard");
// THEN a timer starts
// Hide start prompt
// Show a question

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score