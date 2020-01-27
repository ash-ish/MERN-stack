var arrOfColour = ["green","red","blue","yellow"];
var level = 1;
var computerInput = [];

$(document).on("keydown",function(){
    var gameStarted = true;
    while(gameStarted){
        $("h1").text("Level " + level);
        startGame();
        gameStarted = false;
    }
})

var count  = 1;
function startGame(){
    var gameEnded = false;
    while(!gameEnded){
        var randomNumber = Math.floor(Math.random()*4);
        var colourToBePressed = arrOfColour[randomNumber];

        animateThis(arrOfColour[randomNumber]);
        playSound(arrOfColour[randomNumber]);
        
        computerInput.push(colourToBePressed);

        for(var i = 0;i < count;i++){
            $(document).on("click",function(){
                if(! computerInput[i] == this.text()){
                    restartGame();
                    gameEnded = true;
                    break;
                }
            });
        }
        count++;
    }
}

function restartGame(){
    $("h1").text("Game Over, Press Any Key To Restart");
    $("body").addClass("bg-red");
    setTimeout($("body").removeClass("bg-red"),500);
    playSound("wrong");
}

function animateThis(colourToBePressed){
    $("#"+colourToBePressed).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(colourToBePressed){
    var tune = new Audio("sounds/" + colourToBePressed + ".mp3");
    tune.play();
}