var numberOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHtml = this.innerHTML;
    
    makeSound(buttonInnerHtml);
    
    makeAnimation(buttonInnerHtml);
    
    });
}



document.addEventListener("keypres", function (event) {
    makeSound(event, key);
    makeAnimation(event, key);
});


function makeSound(key) {
    switch (key) {
        
                case "w":
                var kick = new Audio('kick-bass.mp3');
                kick.play();
                break;
                
                case "a":
                var snare = new Audio('snare.mp3');
                snare.play();
                break;
                
                case "s":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
                break;
                
                case "d":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                break;
                
                case "j":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
                break;
                
                case "k":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
                break;
                
                case "l":
                var crash = new Audio("crash.mp3");
                crash.play();
                break;
                
            default:buttonInnerHtml;
                
          }
}


function makeAnimation(key) {
   var addList = document.querySelector("." + key);
   addList.classList.add("pressed");
   
   setTimeout(function () {
       addList.classList.remove("pressed");
   }, 100);
}