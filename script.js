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
    let div = document.createElement("div");
    div.innerText = numberArray[i];
    div.classList.add("gameCard");
    div.addEventListener("click", userClicked);
    gameBox.appendChild(div);
  }
};

const userClicked = () => {
  console.log(document.getElementsByClassName("gameCard").innerHTML);
};

// compare 2 of the divs that the user has clicked
// put each item into an array, then compare their value to evalute if they match
// or store them in seperate variables then compare them

let highScoresArray = [];
