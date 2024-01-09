var Dice1 = document.getElementById("Dice1");
var Dice2 = document.getElementById("Dice2");
function Dice() {
  var Player1 = Math.floor(Math.random() * 6) + 1;
  var Player2 = Math.floor(Math.random() * 6) + 1;
  if (Player1 > Player2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins";
  } else if (Player1 == Player2) {
    document.querySelector("h1").innerHTML = "TIE";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins &#128681";
  }
  if (Player1 == 2) {
    Dice1.src = "./images/dice2.png";
  }
  if (Player1 == 3) {
    Dice1.src = "./images/dice3.png";
  }

  if (Player1 == 4) {
    Dice1.src = "./images/dice4.png";
  }

  if (Player1 == 5) {
    Dice1.src = "./images/dice5.png";
  }

  if (Player1 == 6) {
    Dice1.src = "./images/dice6.png";
  }
  if (Player2 == 2) {
    Dice2.src = "./images/dice2.png";
  }
  if (Player2 == 3) {
    Dice2.src = "./images/dice3.png";
  }

  if (Player2 == 4) {
    Dice2.src = "./images/dice4.png";
  }

  if (Player2 == 5) {
    Dice2.src = "./images/dice5.png";
  }

  if (Player2 == 6) {
    Dice2.src = "./images/dice6.png";
  }
  return Player1;
}
button.addEventListener("click", () => {
  Dice();
});

console.log(result);
