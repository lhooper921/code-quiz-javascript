
// // Countdown Timer
// // Timer starting point defined
let t = 60;

// Countdown function and writing to the page
function countdownTimer() {
    t = t -1;
    if (t < 60) {
        document.getElementById("countdown").innerHTML= t +" seconds" ;
    }
// What happens when time is up  
    if (t < 1) {
        window.clearInterval(update);

        localStorage.setItem('mostRecentScore', 0);
        return window.location.assign("/end.html");
        }
}
update = setInterval("countdownTimer()", 1000);

// Define const by locating them in the document
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('countdown');
const progressBarFull = document.getElementById("progressBarFull");

// Define variables
let currentQuestion = {};
let readyForAnswers = false;
let questionCounter = 0;
let remainingQuestions = [];

// Define question array
let questions = [
    {
        question: "Which one of these methods for joining multiple words is NOT allowed in Javascript?",
        choice1: "Underscore",
        choice2: "Lower Camel Case",
        choice3: "Hyphens",
        choice4: "Upper Camel Case",
        answer: 3
    },
    {
        question:
            "Which function allows you to write or display data directly into the browser console?",
        choice1: "write.console()",
        choice2: "console.log()",
        choice3: "document.consoleLog()",
        choice4: "None of these",
        answer: 2
    },
    {
        question: "Which symbol represents logical OR?",
        choice1: "~~", 
        choice2:"^^", 
        choice3:"%%", 
        choice4:"||", 
        answer: 4
    },
    {
        question: "Given the array: berries = [Strawberries, Blueberries, Raspberries, Blackberries]  What is the index of Raspberries?",
        choice1: 3,
        choice2: 4,
        choice3: 0,
        choice4: 2,
        answer: 4
    },
    {
        question: "Which operator would be used to compare values AND type?",
        choice1:  "=+",  
        choice2:"===",
        choice3:"==!", 
        choice4:"==", 
        answer:  2
    },
    {
        question: "Who created the Javascript programming language?",
        choice1: "James Gosling",
        choice2: "Brendan Eich",
        choice3: "Dennis Ritchie",
        choice4: "Rasmus Lerdorf",
        answer: 2
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choice1: "put()",
        choice2: "addToLast()",
        choice3: "push()",
        choice4: "endAppend()",
        answer: 3
    },
];

// Scorekeeping
const MAX_QUESTIONS = 7;
const TIME_SUBTRACT = -10;

// Reset upon starting
beginQuiz = () => {
  questionCounter = 0;
//   score = t;
  remainingQuestions = [...questions];
  getNewQuestion();
};

// cycle through all remaining questions
getNewQuestion = () => {
  if (remainingQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      if (t<1){
        localStorage.setItem('mostRecentScore', 0);
      }else {
      localStorage.setItem('mostRecentScore', t);}
    //go to the end page
     return window.location.assign('end.html');
  }
//   Add to question count
  questionCounter++;

//   Display question number out of total questions
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

//   Update progress bar
progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

// randomize questions
  const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
remainingQuestions.splice(questionIndex, 1);

readyForAnswers = true;
};
// What happens when user clicks an answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if(!readyForAnswers) return;
      readyForAnswers = false;
      const userChoice = e.target;
      const selectedAnswer = userChoice.dataset['number'];


    
// Change class when answer is correct or incorrect (change red or yellow)
     
      let classToApply = 'incorrect'
      if (selectedAnswer == currentQuestion.answer) {
        
          classToApply = 'correct';
         
         
      }
       else {
          decrementTime (TIME_SUBTRACT)

      }
      userChoice.parentElement.classList.add(classToApply);

// remove class after given interval so changes do not stay indefinitely
      setTimeout(() => {
        userChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
      }, 500)
    

     
    })
})

// Decrease timer 
decrementTime = num => {
    t +=num;
    countdown.innerText = t;
}

beginQuiz();


