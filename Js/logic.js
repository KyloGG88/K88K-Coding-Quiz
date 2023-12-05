// DOM elements

let questionsEl = document.querySelector('#questions');
let timerEl = document.querySelector('#timer');
let choicesEl = document.querySelector('#options');
let submitBtnEl = document.querySelector('#submit');
let startBtnEl = document.querySelector('#start');
let nameEl = document.querySelector('#name');
let feedbackEl = document.querySelector('#feedback');
let gobackEl = document.querySelector('#goback');

// The Initial State
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Starting the  quiz and hiding the initial page

function quizStart() { 
  timerID = setInterval(
    clockTick,
    1000
  );
  timerE1.textContent = time;

  let startScreenEl = document.querySelector('#start-screen');
  startScreenEl.setAttributes("class", "hide");
  questionsEl.removeAttribute("class");

  getQuestions();
}

function getQuestions() { 
  let currentQuestion = questions[currentQuestionIndex];
  let promptEl = document.getElementById('#question-title');

  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  
}

startBtn.onclick = quizStart;