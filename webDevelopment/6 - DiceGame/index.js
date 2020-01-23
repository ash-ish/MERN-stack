var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomNumber2 = Math.floor((Math.random()*6)) + 1;

var pre = "images/dice";
var post = ".png";
var change1 = pre + randomNumber1 + post;
var change2 = pre + randomNumber2 + post;

document.querySelector(".img1").setAttribute("src", change1);
document.querySelector(".img2").setAttribute("src", change2);

if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "<em>🚩</em> Player 2 Wins!";
else if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins! <em>🚩</em>";
else
    document.querySelector("h1").innerHTML = "Draw";