const start = () => {
  document.getElementById("startButton").removeAttribute("onclick");
  let scoreOutput = document.getElementById("scoreOutput");
  score = 0;
  scoreOutput.innerHTML = `Score: ${score}`;

  shuffleArray(numberArray);
  console.log(numberArray);

  let gameBox = document.getElementById("gameBox");

  for (i = 0; i < numberArray.length; ++i) {
    const numberDiv = document.createElement("div");
    numberDiv.innerText = numberArray[i];
    numberDiv.classList.add("gameCard", `${numberArray[i]}`);
    numberDiv.id = `${numberArray[i]}`;
    numberDiv.addEventListener("click", userClicked);
    gameBox.appendChild(numberDiv);
  }
  correctGuesses = 0;
};

let numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const shuffleArray = (array) => {
  for (let i = numberArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = numberArray[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

let userChosenCards = [];

const userClicked = (e) => {
  e.target.style.color = "black";

  //e.target.pointerEvent = "none";

  setTimeout(() => {
    e.target.style.color = "red";
    userChosenCards = [];
  }, "3000");

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
    document.getElementById(`${userChosenCards[0]}`).remove();
    document.getElementById(`${userChosenCards[1]}`).remove();
    endGame();
  } else {
    score++;
    scoreOutput.innerHTML = `Score: ${score}`;
  }
  userChosenCards = [];
};

let lowestScoresArray = [];

const endGame = () => {
  if (correctGuesses === 6) {
    lowestScoresArray.push(score);
    scoreOutput.innerHTML = `Your score for this round was: ${score}. Click "play again" if you wish to have another go`;
    let lowestScoreTest = document.getElementById("lowestScoreOutput");
    lowestScoreTest.innerHTML = `Lowest scores: ${lowestScoresArray.join(" ")}`;
    document.getElementById("replayButton").setAttribute("onclick", "start();");
  }
};

// make each div clickabl only once until the 2nd div has been clicked,
// remove the onclick if the id of the number matches the idof the number clicked
// but, this means you will need to change the system for how its checking if they chosen carsd match
// you will need tochange the ids to classesso that you check the classes i

// impliment a timer to count how long the user has before their choice resets

// try adding items into a css grid or a fixed position os they dont move around

// have a rules button that pops up with a modle of
// all the rules and explanations once the button is clicked
