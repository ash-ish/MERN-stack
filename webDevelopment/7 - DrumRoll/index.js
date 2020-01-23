
var totalDrums = document.querySelectorAll(".drum").length;

for(var i = 0;i<totalDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        if(i==1){
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        }
        else if(i==3){
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        }
        else if(i==2){
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        }
        else if(i==0){
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        }
        else if(i==4){
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
        }
        else if(i==5){
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
        }
        else{
            var tom7 = new Audio("sounds/kick-bass.mp3");
            tom7.play();
        }
        
    });
}