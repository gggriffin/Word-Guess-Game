
var scifi = ["dune", "endor", "spock", 
"borg", "xwing", "zerg", "lightsaber", 
"xenomorph", "vader", "thanos", "picard",
"zaphod"];

var wins = 0;
var incorrectGuess = [];
var correctGuess = [];
var currentWord = [];
var computerWord = scifi[Math.floor(Math.random() * scifi.length)]
var remainingGuesses = 10;



//var userGuess = document.getElementById("guess").value
//var compareGuess = str.indexOf(computerWord) //pick words without multiple letters


//Computer word is picked on page load
onload = function() 
    {
//For loop puts "_" in currentWord array and displays in HTML  
//CSS display: none to remove commas?  
    for (var i = 0; i < computerWord.length; i++) 
        {
        currentWord.push("_");
        }
        document.getElementById("computerChoice").innerText = currentWord.join(" ");
     
        console.log(computerWord); //Used to check computerWord. Delete when finalized
    }

    document.onkeyup = function(event) {
       
        if (computerWord.indexOf(event.key) > -1) //indexOf to check
        {
            correctGuess.push(event.key);
            currentWord[computerWord.indexOf(event.key)] = event.key;
            document.getElementById("computerChoice").innerText = currentWord.join(" ");
            
        } else {

            incorrectGuess.push(event.key);
            document.getElementById("lettersGuessed").innerText = "Letters Guessed: " + incorrectGuess;
            
        }
        }
        
            //for loop tocheck playerGuess against computerWord
        ;
    
   

//User key is checked against selected word


//Guesses Left upates


//Game ends after word is guessed or too many guesses


//Win value is updated


//Word is selected from array and displayed as blanks



