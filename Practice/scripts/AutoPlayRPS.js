let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreOnWeb();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result === 'You win.') {
    score.wins = score.wins + 1;
  } else if(result === 'You lose.') {
    score.losses = score.losses + 1;
  } else if(result === 'Tie.') {
    score.ties = score.ties + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreOnWeb();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You chose <img src="images/${playerMove}-emoji.png" class="move-icon">
   vs. <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreOnWeb() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }
  return computerMove;
}

let isAutoPlaying = false;
let intervalID;

// this is the arrow function way comparing to below
// const autoPlay = () => {

// };

function autoPlay() {
  if(!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 500);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper');});

document.querySelector('.js-scissors-button').addEventListener('click', () => {playGame('scissors');});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  } else if(event.key === 'p') {
    playGame('paper');
  } else if(event.key === 's') {
    playGame('scissors');
  }
});