// var ranmdomNumber1 =Math.floor(Math.random()*6) +1;

// var randomDiceImg="images/dice"+ranmdomNumber1+".png";//dice

// document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);

// var ranmdomNumber1 =Math.floor(Math.random()*6) +1;

// var randomDiceImg="images/dice"+ranmdomNumber1+".png";//dice

// document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg);

var randomNumber=0;
var randomDiceImg="";
var dice = [];

for (let index = 0; index < 2; index++) {
    randomNumber = Math.floor(Math.random()*6)+1;
    randomDiceImage="images/dice"+randomNumber+".png";
    document.querySelectorAll("img")[index].setAttribute('src',randomDiceImage);
    dice.push(randomNumber);
}

if(dice[0]===dice[1]){
    document.querySelector("h1").innerHTML="Draw!";
}else if(dice[0]>dice[1]){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(dice[0]<dice[1]){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
};