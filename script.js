var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceImg = document.querySelector(".img1");
diceImg.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

// dice-2
var randomNumber2 = Math.floor(Math.random() *6) +1;

var diceImg1 = document.querySelector(".img2");
diceImg1.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// result
var resultHeading = document.querySelector("#result");
// if
if(randomNumber1 > randomNumber2){
    resultHeading.innerHTML = "🚩 Player 1 Wins!"
}else if (randomNumber1 < randomNumber2){
    resultHeading.innerHTML = "Player 2 Wins! 🚩"
}else{
    resultHeading.innerHTML = "It's a Draw! 🎲"
}