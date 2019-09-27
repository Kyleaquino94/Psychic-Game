     //creating an array that list all the options
    var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //creating variables for win, lose, guesses.  They have 10 guesses

    var wins = 0;
    var losses = 0;
    var guesses = 9;

    
    var guessmade = [];

  

    //the computer will now guess what letter to choose
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    // Creating variable that hold reference to the place in the HTML we want to display things
    var directionText = document.getElementById("direction-text");
    var computerchoiceText = document.getElementById("userchoice-text");
    var computerchoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessleftText = document.getElementById("guessleft-text");
    var yourchoiceText = document.getElementById("yourchoice-text");

    //function whenever user presses a key
    document.onkeyup = function(event) {

     //user guesses array
    var userGuesses = event.key

    if (userGuesses === computerGuess) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        guesses = 9;
        guessleftText.textContent = "guessleft: " + guesses;
        guessmade = [];
        yourchoiceText.textContent = "yourchoice: " + guessmade;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        
        
    }


    if (userGuesses !== computerGuess) {
        guesses--;
        guessleftText.textContent = "guessleft: " + guesses;
        guessmade.push(userGuesses);
        yourchoiceText.textContent = "yourchoice " + guessmade;

    }

    if (guesses === 0) {
        losses++;
        lossesText.textContent = "Losses: " + losses;
        guesses = 9;
        guessleftText.textContent = "guessleft: " + guesses;
        guessmade = [];
        yourchoiceText.textContent = "yourchoice: " + guessmade;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        
    }

}
   


        
    
  