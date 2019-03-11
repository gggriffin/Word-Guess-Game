
var scifi = ["dune", "endor", "spock", 
"borg", "xwing", "zerg", "lightsaber", 
"krypton", "vader", "thanos", "picard",
"leia"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                "j", "k", "l", "m", "n", "o", "p", "q", "r",
                "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var incorrectGuess = [];
var correctGuess = [];
var currentWord = [];
var computerWord = scifi[Math.floor(Math.random() * scifi.length)]
var totalGuesses = 10;
var remainingGuesses = 0;


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
    document.getElementById("guessesRemaining").innerText = "Guesses Remaining: " + totalGuesses;
    document.getElementById("winTotal").innerText = "Wins: " + wins;
    console.log(computerWord); //Used to check computerWord. Delete when finalized
    }

    document.onkeyup = function(event) {
       //if else to check if (totalGuesses - incorrectGuess.length) < 0 and reset variables if so
        if (currentWord.indexOf("_") === -1) {
            currentWord = [];
            incorrectGuess = [];
            wins++
            computerWord = scifi[Math.floor(Math.random() * scifi.length)];
            console.log(computerWord);

            for (var i = 0; i < computerWord.length; i++) 
            {
                currentWord.push("_");
            }
            document.getElementById("computerChoice").innerText = currentWord.join(" ");
            document.getElementById("guessesRemaining").innerText = "Guesses remaining: " + totalGuesses;
            document.getElementById("winTotal").innerText = "Wins: " + wins;
        }
        else if ((totalGuesses - incorrectGuess.length) < 2) {
            currentWord = [];
            incorrectGuess = [];
        }

         if (alphabet.indexOf(event.key) > -1 && computerWord.indexOf(event.key) > -1) //indexOf to check user guess against computerChoice
        {
            correctGuess.push(event.key);
            currentWord[computerWord.indexOf(event.key)] = event.key;
            document.getElementById("computerChoice").innerText = currentWord.join(" ");
            
        } else if(alphabet.indexOf(event.key) > -1) {

            incorrectGuess.push(event.key);
            document.getElementById("lettersGuessed").innerText = "Letters Guessed: " + incorrectGuess;
            document.getElementById("guessesRemaining").innerText = "Guesses remaining: " + (totalGuesses - incorrectGuess.length);
        }
        };
   

