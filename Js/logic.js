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

