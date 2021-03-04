var score1 = 0;
var score2 = 0;

document.querySelectorAll("button")[1].addEventListener("click", function (){
  var numberOfDice1 = Math.floor(Math.random() * 6 + 1);
  var randomDice1 = "dice" + numberOfDice1 + ".svg";
  var sourceDice1 = "images/" + randomDice1;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", sourceDice1);

  var numberOfDice2 = Math.floor(Math.random() * 6 + 1);
  var randomDice2 = "dice" + numberOfDice2 + ".svg";
  var sourceDice2 = "images/" + randomDice2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",sourceDice2);

  var player1ScoreBoard = document.querySelector(".player1score");
  var player2ScoreBoard = document.querySelector(".player2score");

  if (numberOfDice1 > numberOfDice2){
    var player1 = document.querySelector("h1");
    player1.innerHTML = "🏆 Player 1 wins!";
    player1.style.color ="#295939";
    score1 += 1;
    player1ScoreBoard.innerHTML = "SCORE: " + score1;
  }
  else if (numberOfDice2 > numberOfDice1){
    var player2 = document.querySelector("h1");
    player2.innerHTML = "🏆 Player 2 wins!";
    player2.style.color = "#8c0000";
    score2 +=1;
    player2ScoreBoard.innerHTML = "SCORE: " + score2;
  }
  else {
    var draw = document.querySelector("h1");
    draw.innerHTML = "😁 Draw!";
    draw.style.color = "#18191b";
  }
});
