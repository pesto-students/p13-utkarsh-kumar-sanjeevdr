let guessCount = 0;
let num = 0;

let result;

function playNumGuessingGame(){
    result = playGuessingGame(6, 5);

    //alert("Returned Value : "+result);
    if (result === null) {
        console.log("You have cancelled the game.");
        document.getElementById("demo").innerHTML = "You have cancelled the game.";
        guessCount = 0;
        num = 0;
        return;
    }
    else if (result !== 0) {
        console.log("You have taken " + result + " total attempts to guess it correctly !");
        document.getElementById("demo").innerHTML = "You have taken " + result + " total attempts to guess it correctly !";
        guessCount = 0;
        num = 0;
        return;
    } else {
        console.log("You failed to guessed it correctly and have exceeded the number of guesses allowed.");
        document.getElementById("demo").innerHTML = "You failed to guessed it correctly and have exceeded the number of guesses allowed.";
        guessCount = 0;
        num = 0;
        return;
    }
}

function lessThanCase(num){    
    num = prompt(num + " is too small. Guess a larger number : ");

    if (typeof num === "string" && num.length === 0) {
        num =   prompt("Please enter a number.");
    } else if (isNaN(num)) {
        num = prompt("Please enter a number.");
    } 
    else if (num === null) {
        return num;
    } 

    num = parseInt(num);
    ++guessCount;   
    return num;
}

function greaterThanCase(num){    
    num = prompt(num + " is too large. Guess a smaller number : ");

    if (typeof num === "string" && num.length === 0) {
        num =   prompt("Please enter a number.");
    } else if (isNaN(num)) {
        num = prompt("Please enter a number.");
    } 
    else if (num === null) {
        return num;
    } 

    num = parseInt(num);
    ++guessCount;   
    return num;
}

function playGuessingGame(numToGuess, totalGuesses = 10) {    
    
    if (guessCount >= totalGuesses) {
       // alert("Inside greater than");
        return 0;
    } 

    if (guessCount === 0) {
        num = prompt("Enter a number between 1 and 100, to guess the number : ");

        if (typeof num === "string" && num.length === 0) {
            num =   prompt("Please enter a number.");
        } else if (isNaN(num)) {
            num = prompt("Please enter a number.");
        } 
        else if (num === null) {
            return num;
        } 

        num = parseInt(num);
        if (num === numToGuess) {
            return ++guessCount;
        } else {
            ++guessCount;           
        }
    }

    if (num === numToGuess) {
        return guessCount;
    }

    if (num < numToGuess) {        
        num=lessThanCase(num); 
        if (num === null) {
            return num;
        } 
        if (num === numToGuess) {
            return guessCount;
        } 
        if (guessCount >= totalGuesses) {
           // alert("Inside greater than");
            return 0;
        }       
    }

    if (num > numToGuess) {        
        num=greaterThanCase(num); 
        if (num === null) {
            return num;
        } 
        if (num === numToGuess) {
            return guessCount;
        }
        if (guessCount >= totalGuesses) {
           // alert("Inside greater than");
            return 0;
        }        
    }        
    
    return playGuessingGame(numToGuess,totalGuesses);
}




