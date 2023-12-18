var randomnumber1 = Math.floor(Math.random()*6)+ 1;
var randomDice1 = "./images/dice"+randomnumber1+".png";

var randomnumber2 = Math.floor(Math.random()*6)+ 1;
var randomDice2 = "./images/dice"+randomnumber2+".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if (randomnumber1 > randomnumber2){
    document.querySelectorAll("h2")[0].innerHTML = "Player 1 won";
}

else if (randomnumber2 > randomnumber1){
    document.querySelectorAll("h2")[0].innerHTML = "Player 2 won";
}

else {document.querySelectorAll("h2")[0].innerHTML = "Game is tied";}
