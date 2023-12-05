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

// Starting the quiz and hiding the initial page

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

// Retrieve questions from the Object

function getQuestions() { 
  let currentQuestion = questions[currentQuestionIndex];
  let promptEl = document.getElementById('#question-title');

  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  currentQuestionIndex.options.forEach(
    function (choice, i) {
      let choiceBtn = document.createElementById("button");

      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      choicesEl.appendChild(choiceBtn);
    }
  );  
}

//Right or Wrong Answers function

function questionClick() { 
  if (this.value !== questions[currentQuestionIndex].answer) { 
    time -= 5;
    if (time < 0) { 
        time = 0; 
      } 
      timerEl.textContent = time; 
      feedbackEl.textContent = `Wrong! The correct answer was  
      ${questions[currentQuestionIndex].answer}.`; 
      feedbackEl.style.color = "red"; 
  } else { 
      feedbackEl.textContent = "Correct!"; 
      feedbackEl.style.color = "green"; 
  } 
  feedbackEl.setAttribute( 
      "class", 
      "feedback"
  ); 
  setTimeout(function () { 
      feedbackEl.setAttribute( 
          "class", "feedback hide"); 
  }, 2000); 
  currentQuestionIndex++; 
  if (currentQuestionIndex === questions.length) { 
      quizEnd(); 
  } else { 
      getQuestion(); 
  } 
} 

startBtn.onclick = quizStart;