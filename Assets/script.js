 

 




// // Countdown Timer
// // Timer starting point defined
// let t = 20;

// // Countdown function and writing to the page
// function countdownTimer() {
//     t = t -1;
//     if (t < 20) {
//         document.getElementById("countdown").innerHTML= "Time remaining: " + t +" seconds" ;
//     }
// // What happens when time is up  
//     if (t < 1) {
//         window.clearInterval(update);
//       }
// }
// update = setInterval("countdownTimer()", 1000);



        
const quizContent = [
    {
      q: "Which function allows you to write or display data directly into the browser console?",
      a: [
        "write.console()",
        "console.log()",
        "document.consoleLog()"
      ],
      correctAnswer: 1
    },
    {
      q: "Which one of these methods for joining multiple words is NOT allowed in Javascript?",
      a: [
         "Underscore",
         "Lower Camel Case",
         "Hyphens",
         "Upper Camel Case",
      ],
      correctAnswer: 2
    },
    {
      q: "Which symbol represents logical OR?",
      a: [
         "~~",
         "^^",
         "%%",
         "||",
        ],
      correctAnswer: 3
    },
    {
        q: "Given the array 'var berries = ['Strawberries', 'Blueberries', 'Raspberries', 'Blackberries']' What is the index of Raspberries?",
        a: [
           "3",
           "1",
           "2",
           "4",
          ],
        correctAnswer: 2
      },
      {
        q: "Which operator would be used to compare values AND type?",
        a: [
           "=+",
           "===",
           "==!",
           "==",
          ],
        correctAnswer: 1
      },
      {
        q: "Who created the Javascript programming language?",
        a: [
           "James Gosling",
           "Brendan Eich",
           "Dennis Ritchie",
           "Rasmus Lerdorf",
          ],
        correctAnswer: 1
      },
      {
        q: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        a: [
           "put()",
           "addToLast()",
           "push()",
           "endAppend()",
          ],
        correctAnswer: 2
      },
  ];


function init(){
// loop through question array 
const quizElement = document.getElementById('quiz');
let quizStr=''
quizContent.forEach(function(question, qIndex){
    let answerStr = ''
    const answerOrder = randomRange(question.a.length)
    // for each question, loop through answer array, 
    question.a.forEach(function(answer, aIndex){
        answerStr += `
        <li style="order: ${answerOrder[aIndex]}">
         <button type ="submit" 
         class="btn btn-primary mt-4" 
         name = "Question - ${qIndex}"
         data-correct="${question.correctAnswer === aIndex}"
         >
          ${answer}
          </button>
        
        </li>
        `
    
})
// Structure of quiz
    quizStr += `
    <form>
    <h1> ${question.q}</h1>
    
    <ul>
    ${answerStr}
    </ul>

    <div class ="alert">  </div>
    </form>
    `
})
// display quiz elements on page
quizElement.innerHTML = quizStr;

// What happens when buttons are selected
quizElement.addEventListener('submit', function(e){
    e.preventDefault()
    // find selected answer within target question
    const alert = e.target.querySelector('div.alert')
    const userInput = e.target.querySelector('button[type=submit]:active')
    if (userInput.dataset.correct === "true" ){
        alert.innerHTML =  'You are correct!'
    }else {
        alert.innerHTML = 'Wrong answer!'
    }
    
})
}  
init()

// Randomize answer order

function random(n){
    return(Math.floor(Math.random()* n))
}

function randomRange(x) {
    const arr =[]
    for (let i=0; i<x; i+=1){
        arr.push(i)
    }
    const randomArr=[]
    while(arr.length>0){
        const randomIndex= random(arr.length)
        const randomNumber = arr[randomIndex]
        // add the random number to the random array
        randomArr.push(randomNumber)
        // remove the item at the random index
        arr.splice(randomIndex, 1)
    }
    return randomArr
}
