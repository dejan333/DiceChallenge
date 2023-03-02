function diceChallenge(){
  
var playerOne =  Math.floor(Math.random() * 6 + 1); //Player one Random Num
var playerTwo =  Math.floor(Math.random() * 6 + 1); //Player Two Random Num

               // Player one Img
document.querySelector(".img1").setAttribute("src","images/dice" + playerOne + ".png");
// Player two Img
document.querySelector(".img2").setAttribute("src","images/dice" + playerTwo + ".png");


if(playerOne > playerTwo){
document.querySelector("h1").innerHTML = "🎉 Player One wins";
}else if(playerOne === playerTwo){
document.querySelector("h1").innerHTML = "Draw";
}else {
document.querySelector("h1").innerHTML = "Player Two Wins✔🎉";
}
}

document.getElementById('btn').addEventListener("click", diceChallenge);
//
