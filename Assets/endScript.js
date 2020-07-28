const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// Total high scores saved in the array
const MAX_HIGH_SCORES = 5;

// Print most recent score on the page
finalScore.innerText = mostRecentScore;

// Do not allow user to submit unless initials contains text
function manage(initials) {
    var bt = document.getElementById('saveScoreBtn');
    if (initials.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
        
    }
}
manage(initials);



saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        initials: initials.value,
    };
    // Add each high score to the array
    highScores.push(score);

    // if "b score" is higher than "a score" then put "b" before "a"
    highScores.sort((a, b) => b.score - a.score);

    // Do not save any more than top 5 high scores
    highScores.splice(5);

    // Update with high scores and stringify array
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
    // Go to home page when finsihed saving
    window.location.assign(href='index.html');
  
};