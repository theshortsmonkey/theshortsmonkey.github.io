const squares = [...document.getElementsByClassName("square")];
const currentPlayerIs = document.getElementById("current-player");
const winner = document.getElementById("winning-player");
const playerOneName = document.getElementById("p1name");
const playerTwoName = document.getElementById("p2name");
const playerOneSymbol = document.getElementById("p1symbol");
const playerTwoSymbol = document.getElementById("p2symbol");
const playerOneScore = document.getElementById("p1score");
const playerTwoScore = document.getElementById("p2score");
const playerOne = { icon: "X", name: 'Player 1', score: 0, id: 0 };
const playerTwo = { icon: "O", name: 'Player 2', score: 0, id: 1 };
let currentPlayer = playerOne;
let startPlayer = playerOne
let hasWon = false;
let playCount = 0;

playerOneName.addEventListener("input", (e) => {
  console.log(e)
  if(e.inputType === 'deleteContentBackward') {
    playerOne.name = playerOne.name.slice(0,-1)
  } else if (e.data) {
    if (playerOne.name === 'Player 1') { playerOne.name = '' }
    playerOne.name = `${playerOne.name}${e.data}`
  } else {
    playerOne.name = 'Player 1'
  }
  if(currentPlayer === playerOne) {
    currentPlayerIs.textContent = `${playerOne.name}, place your ${playerOne.icon}`;
  }
})
playerTwoName.addEventListener("input", (e) => {
  if(e.inputType === 'deleteContentBackward') {
    playerTwo.name = playerTwo.name.slice(0,-1)
  } else if (e.data) {
    if (playerTwo.name === 'Player 2') { playerTwo.name = '' }
    playerTwo.name = `${playerTwo.name}${e.data}`
  } else {
    playerOne.name = 'Player 2'
  }
  if(currentPlayer === playerTwo) {
    currentPlayerIs.textContent = `${playerTwo.name}, place your ${playerTwo.icon}`;
  }
})

squares.forEach((square, index) => {
  square.addEventListener("click", () => {
    if (!square.textContent && !hasWon) {
      square.textContent = currentPlayer.icon;
      checkWinCombinations();
      if (!hasWon && playCount < 8) {
        changePlayer();
      }
    }
  });
});

const winCombinations = [
  ["s1", "s2", "s3"],
  ["s4", "s5", "s6"],
  ["s7", "s8", "s9"],
  ["s1", "s4", "s7"],
  ["s2", "s5", "s8"],
  ["s3", "s6", "s9"],
  ["s1", "s5", "s9"],
  ["s3", "s5", "s7"],
];

const checkWinCombinations = () => {
  winCombinations.forEach((combination) => {
    const squareA = document.getElementById(combination[0]);
    const squareB = document.getElementById(combination[1]);
    const squareC = document.getElementById(combination[2]);
    if (squareA.textContent && squareB.textContent && squareC.textContent) {
      if (
        squareA.textContent === squareB.textContent &&
        squareB.textContent === squareC.textContent
      ) {
        currentPlayerIs.textContent = `${currentPlayer.name} wins!`;
        currentPlayer.score++;
        playerOneScore.textContent = `Score: ${playerOne.score}`;
        playerTwoScore.textContent = `Score: ${playerTwo.score}`;
        hasWon = true;
      }
    }
  });
  console.log(playCount,hasWon)
  if (!hasWon && playCount === 8) {
    console.log('in if')
    currentPlayerIs.textContent = 'That was a draw, keep trying, someone will win eventually!';
  }
};

const changePlayer = () => {
  if (currentPlayer === playerTwo) {
    currentPlayer = playerOne;
  } else {
    currentPlayer = playerTwo;
  }
  currentPlayerIs.textContent = `${currentPlayer.name}, place your ${currentPlayer.icon}`;
  playCount++;
};

const resetBoard = () => {
  squares.forEach((square, index) => {
    square.textContent = "";
  });
  if (startPlayer === playerTwo) {
    startPlayer = playerOne;
  } else {
    startPlayer = playerTwo;
    
  }
  currentPlayer = startPlayer
  currentPlayerIs.textContent = `Current player is: ${currentPlayer.name}`;
  hasWon = false;
  playCount = 0;
};
