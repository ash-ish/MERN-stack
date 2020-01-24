var totalDrums = document.querySelectorAll(".drum").length;

//detecting buton click
for(var i = 0;i<totalDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//detecting keybutton click
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// making sound according to the key pressed
function makeSound(key){
    if(key == 'w'){
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    else if(key == 'a'){
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    else if(key == 's'){
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    else if(key == 'd'){
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    else if(key == 'j'){
        var tom5 = new Audio("sounds/snare.mp3");
        tom5.play();
    }
    else if(key == 'k'){
        var tom6 = new Audio("sounds/crash.mp3");
        tom6.play();
    }
    else{
        var tom7 = new Audio("sounds/kick-bass.mp3");
        tom7.play();
    }
}

//adding shadow and removing it in 0.1 sec on the buttons
function buttonAnimation(key){
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function(){
        currentButton.classList.remove("pressed");
    },100);
}