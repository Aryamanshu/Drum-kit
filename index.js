
//for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
//document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


//function handleClick(){
  //  alert("i got clicked")
//}};

// above code is with using for loop

//function handleClick() {
  //  alert("i got clicked"); 
  //}
  
  //let i = 0;
  //let drums = document.querySelectorAll(".drum");
  //while (i < drums.length) {
    //drums[i].addEventListener("click", handleClick);
    //i++;
  //}

  // above code is using while loop


// detecting button press //

  for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);
      
});
    }
    

// detecting keyboard pres //

    document.addEventListener("keypress", function(event) {
      
      makeSound(event.key);
    
      buttonAnimation(event.key);
    });
   
    function makeSound(key){

      switch (key) {
      
        case "w":
        var kick =  new Audio("sounds/kick-bass.mp3");
        kick-bass.play(); // its a constructor function
        console.log("pressed");
        break;
        
        case "a":
        
        var crash =  new Audio("sounds/crash.mp3");
        crash.play(); // its a constructor function
  
        break;
        
        case "s":
        
        var snare =  new Audio("sounds/snare.mp3");
        snare.play();  // its a constructor function
  
        break;
        
        case "d":
        
        var tom1 =  new Audio("sounds/tom-1.mp3");
        tom1.play();  // its a constructor function
  
        break;
        
        case "j":
  
        var tom3 =  new Audio("sounds/tom-3.mp3");
        tom3.play();  // its a constructor function
  
        break;
        
        case "k":
        
        var tom4 =  new Audio("sounds/tom-4.mp3");
        tom4.play();  // its a constructor function
  
  
        break;
        
        case "l":
        
        var tom2 =  new Audio("sounds/tom-2.mp3");
        tom2.play();  // its a constructor function
        break;
  
        default: console.log(buttonInnerHTML);
          
      }
    }

 //  giving  animation to drum buttons 
  function buttonAnimation(currentkey){

    var activeButton  =  document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
  

  // using this  function to gave the buttons their original state after the animation
    setTimeout(function() {
       activeButton.classList.remove("pressed");
      } , 100);
    
  }





    // we have added sound to the drums by using above code.


   // for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
      //document.querySelectorAll(".drum")[i].addEventListener("click", function () {

       // this.style.color = "white";
        

      //});
   // }

    // now that we know which key was pressed and how we can get its innerHTML, by using "this" attribute.
