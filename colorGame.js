var numSquares;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Color = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	initSquares();
	listeners();
	reset();
};

function listeners(){
	resetButton.addEventListener("click", reset);


	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", buttons)
	}
};

function initSquares(){
	numSquares = 6;
	for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", check);
	}
};

function buttons(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		/*if(this.textContent === "Easy") {
			numSquares = 3;
		} else {
			numSquares = 6;
		}*/

		reset();
};

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from an array
	pickedColor = pickColor();
	// change color display rgb to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of the squares
	

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1Color.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
};

/*easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1Color.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}	
	h1Color.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});*/

function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change color of squares
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function randomColor(){
	// pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")" ;
};

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		// get random color from 0 to 255
	}
	//return that array
	return arr;
};

function check() {
	var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				h1Color.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}	
};