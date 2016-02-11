// Javascript game created by Melissa Grottkau Garcia 2016

// Variables
var mysteryNumber = 7;
var playerGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var playerScore = 0;

// Initialize the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var outputScore = document.querySelector("#outputScore");

//Button code
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler);

function clickHandler()
{
	if(guessesRemaining > 0)
	{
		
	
		playerGuess = parseInt(input.value);
		

		if(playerGuess > mysteryNumber)
		{
			output.innerHTML = "That's too high!";
			guessesMade ++;
			guessesRemaining --;
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made  " + guessesMade + " guess, and have " + guessesRemaining + " left.";
			}

			else if (guessesRemaining === 1)
			{
				outputScore.innerHTML = "You have made  " + guessesMade + " guess, and have " + guessesRemaining + " left.";
			}
			else
			{
				outputScore.innerHTML = "You have made  " + guessesMade + " guesses, and have " + guessesRemaining + " left.";
			}
		}
		
		else if(playerGuess < mysteryNumber)
		{
			output.innerHTML = "That's too low!";
			guessesMade ++;
			guessesRemaining --;
			outputScore.innerHTML = "You have made  " + guessesMade + " guesses, and have " + guessesRemaining + " left.";
		}
		
		else if(playerGuess === mysteryNumber)
		{
			output.innerHTML = "You Win!";
			playerScore += guessesRemaining;
			guessesMade = 0;
			guessesRemaining = 10;
			outputScore.innerHTML = "Your current score is " + playerScore;
			mysteryNumber = Math.floor(Math.random()*99);
		}
		else
		{
			output.innerHTML = "Stop playing around and play the game!";
		}
	}
	else
	{
		outputScore.innerHTML = "Your final score is " + playerScore;
		output.innerHTML = "Game over!";
	}
}