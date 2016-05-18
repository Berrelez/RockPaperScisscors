// Set global variables to keep track of game winnings
var playerWins = 0;
var computerWins = 0;
	
// 	This runs every time a button is clicked.
function play(playerItem){	
	
	console.log("Starting Game");
	
	document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString(); //Set starting values to the screen
	document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString(); //Set starting values to the screen
	
	// Run a function to get a new computer choice
	var computerItem = getComputerItem();
	
	console.log('Computer Item: ',computerItem);
	console.log('Player Wins: ' + playerWins );
	console.log('Computer Wins: ' + computerWins );
	console.log('Player Item: ',playerItem);
	
	//Run a function that will compare the two choices
	checkItem(playerItem,computerItem);			
}

// This function randomlly selects a computer choice
function getComputerItem() {
	
	console.log("Getting computer item");
	
	var items = ['rock','paper','scissors']; //Build the array that will hold the choices 
	var computerChoice = Math.floor(Math.random() * 3); // Randomly pull a number from 0 - 2 
	var item = items[computerChoice]; // Pass the random number into the array and return the value
	return item;

}

// This function will increment the variables at the top of the screen based on the value that is passed.
// It has only one paramter.
function increment(winner){
		
	if(winner === 'player'){ // Player was passed into the parameter.
		console.log('incrementing player wins');	
		playerWins ++; // Increment the player counter by 1 value
		document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString(); //Set the new value to the screen
	}else{ // computer was passed
		console.log("increment computer wins");
		computerWins ++;  // Increment the player counter by 1 value
		document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString(); // Set the new value to the screen
	}
	
}

// This is pretty much the main function of the game.
// It will accept two parameters, player choice and computer choice
// I am using an alert bar to display the results. Notice how I am changing the class name, you will see this in the index.html fileCreatedDate
// If computer or player wins, I will call the function and pass in a hard-coded value.
function checkItem(playerItem,computerItem){
	
	//Player Item = Rock
	if(playerItem === 'rock' && computerItem === 'rock'){
		document.getElementById('result').innerHTML = "It''s a tie!!";
		document.getElementById('result').className = "alert alert-warning text-center";
	}else if(playerItem === 'rock' && computerItem === 'paper'){
		document.getElementById('result').innerHTML = "The computer wins!";
		document.getElementById('result').className = "alert alert-danger text-center";
		increment('computer');
	}else if(playerItem === 'rock' && computerItem === 'scissors'){
		document.getElementById('result').innerHTML = "You win!";
		document.getElementById('result').className = "alert alert-success text-center";
		increment('player');
	}
	
	//Player Item = Paper
	if(playerItem === 'paper' && computerItem === 'paper'){
		document.getElementById('result').innerHTML = "It''s a tie!!";
		document.getElementById('result').className = "alert alert-warning text-center";
	}else if(playerItem === 'paper' && computerItem === 'scissors'){
		document.getElementById('result').innerHTML = "The computer wins!";	
		document.getElementById('result').className = "alert alert-danger text-center";
		increment('computer');
	}else if(playerItem === 'paper' && computerItem === 'rock'){
		document.getElementById('result').innerHTML = "You win!";
		document.getElementById('result').className = "alert alert-success text-center";
		increment('player');
	}
	
	//Player Item = Scissors
	if(playerItem === 'scissors' && computerItem === 'scissors'){
		document.getElementById('result').innerHTML = "It''s a tie!!";
		document.getElementById('result').className = "alert alert-warning text-center";
	}else if(playerItem === 'scissors' && computerItem === 'rock'){
		document.getElementById('result').innerHTML = "The computer wins!";
		document.getElementById('result').className = "alert alert-danger text-center";
		increment('computer');
	}else if(playerItem === 'scissors' && computerItem === 'paper'){
		document.getElementById('result').innerHTML = "You win!";
		document.getElementById('result').className = "alert alert-success text-center";
		increment('player');
	}
}

// Reset the game. This will reset the counters back to zero and display them on the screen.
function resetGame(){
	
	playerWins = 0; // only reference them, if var is placed in front of them they become part of the function and the counter will not reset.
	computerWins = 0;
	
	document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString(); //Set starting values to the screen
	document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString(); //Set starting values to the screen
	
}
