$(document).on("keydown",function(){
    $("h1").text("Level 1");
})

var randomNumber = Math.floor(Math.random()*4);

var colourToBePressed;
if(randomNumber == 0)
    colourToBePressed = "green";
else if(randomNumber == 1)
    colourToBePressed = "red";
else if(randomNumber == 2)
    colourToBePressed = "blue";
else
    colourToBePressed = "yellow";

$("." +  colourToBePressed)
    
var userInput = [];