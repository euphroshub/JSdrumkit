

// for loop to go thru all buttons with the class "drum"
// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){

// listener to go thru drum classes buttons and add anonymous click function to it
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

});
}

// detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});
// Switch case function to play a different sound for each button
function makeSound(key) {

  switch (key) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default: console.log(key);

  }
}

// animation of the drum buttons

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);

}
