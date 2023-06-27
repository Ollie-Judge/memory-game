const randomNumber = () => Math.floor(Math.random() * 6 + 1);

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
  let div = document.createElement("div");
  div.innerText = numberArray[i];
  div.classList.add("gameCard");
  gameBox.appendChild(div);
}

/*const start = () => {
  let div = document.getElementsByClassName("gameCard").classList;
  div.remove("hidden");
};

let highScoresArray = [];*/
