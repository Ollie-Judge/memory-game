const start = () => {
  document.getElementById("startButton").removeAttribute("onclick");

  shuffleArray(numberArray);
  console.log(numberArray);

  let gameBox = document.getElementById("gameBox");

  for (i = 0; i < numberArray.length; ++i) {
    const div = document.createElement("div");
    div.innerText = numberArray[i];
    div.classList.add("gameCard");
    div.id = `${numberArray[i]}`;
    div.addEventListener("click", userClicked);
    gameBox.appendChild(div);
  }
};

let numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const shuffleArray = (array) => {
  for (var i = numberArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = numberArray[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

let userChosenCards = [];

const userClicked = (e) => {
  userChosenCards.push(e.target.id);
  console.log(userChosenCards);

  if (userChosenCards.length === 2) {
    checkUserSelection();
  }
};

let correctGuesses = 0;
let score = 0;

const checkUserSelection = () => {
  if (userChosenCards[0] === userChosenCards[1]) {
    correctGuesses++;
    console.log("correct" + correctGuesses);
    document.getElementById(`${userChosenCards[0]}`).remove();
    document.getElementById(`${userChosenCards[1]}`).remove();
    // remove the correct cards
    endGame();
  } else {
    score++;
    console.log("incorrect " + score);
  }
  userChosenCards = [];
};

let highScoresArray = [];

const endGame = () => {
  if (correctGuesses === 6) {
    highScoresArray.push(score);
    console.log("end game");
    console.log(`${score} high scores`);
    document.getElementById("replayButton").setAttribute("onclick", "start();");
  }
};
