const start = () => {
  let numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

  const shuffleArray = (array) => {
    for (var i = numberArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = numberArray[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

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

let userPicked1;
let userPicked2;

let array = [];

const userClicked = (e) => {
  array.push(e.target.id);
  console.log(array);

  if (array.length === 2) {
    checkUserSelection();
  }
};

console.log(userPicked1);
console.log(userPicked2);

const checkUserSelection = () => {
  if (array[0] === array[1]) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  array = [];
};

let highScoresArray = [];
