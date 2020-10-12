window.onload = function (){


	// Buttons for the tic-tac-toe game  

	var squares = document.querySelectorAll('#board div');

	for (i = 0; i < squares.length; i++) {
		squares[i].classList.add('square');
	}

	var track = new Array();




	var tracker = 0;

	for (var j = 0; j < squares.length; j++){
		squares[j].onclick = function() {
			if (this.innerHTML !== "X" && this.innerHTML !== "O"){
				if(tracker%2 === 0){


			this.innerHTML = "X";
			console.log("Player X Clicked Square ", j)
			win();
			/* was trying to enter a break here where i would set up an if statement if a winner 
			was decided so that it wouldnt allow u to play anymore but i kept getting an error */
			tracker+=1;
			this.classList.add(".square","X");
			track.push("X");
			
		}else{

			this.innerHTML = "O";
			console.log("Square " + j + " was Clicked")
			win();
			tracker+=1;
			this.classList.add(".square","O");
			track.push("O");
			

		}


			}
		}

		squares[j].addEventListener("mouseover", function (){
				this.classList.add("hover");
			});
		
		squares[j].addEventListener("mouseout", function (){
			this.setAttribute("class", "square");
		});






	}
// used to determine the winner of the tic tac toe game in the various ways u can win 
function win(){

	var square1 = squares[0];
	var square2 = squares[1];
	var square3 = squares[2];
	var square4 = squares[3];
	var square5 = squares[4];
	var square6 = squares[5];
	var square7 = squares[6];
	var square8 = squares[7];
	var square9 = squares[8];

	/* also wanted but a break after each of these so that if one of the criteras were met it would stop and not change the winner 
	if someone else played */


	if(square1.innerHTML !== "" && square1.innerHTML === square2.innerHTML && square1.innerHTML === square3.innerHTML ){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")


	} else if (square4.innerHTML !== "" && square4.innerHTML === square5.innerHTML && square4.innerHTML === square6.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")
		

	} else if (square7.innerHTML !== "" && square7.innerHTML === square8.innerHTML && square7.innerHTML === square9.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")
		

	} else if (square1.innerHTML !== "" && square1.innerHTML === square4.innerHTML && square1.innerHTML === square7.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")
		

	} else if (square2.innerHTML !== "" && square2.innerHTML === square5.innerHTML && square2.innerHTML === square8.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")
		

	} else if (square3.innerHTML !== "" && square3.innerHTML === square6.innerHTML && square3.innerHTML === square9.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")
		

	}else if (square1.innerHTML !== "" && square1.innerHTML === square5.innerHTML && square1.innerHTML === square9.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")

	}else if (square3.innerHTML !== "" && square3.innerHTML === square5.innerHTML && square3.innerHTML === square7.innerHTML){
		var last = track[track.length - 2];	
		var win = document.getElementById("status").innerHTML = "Congratulations! " + last + " is the Winner!";
		win.className = "status.you-won";
		console.log("Player " + last + " Won ")

	}
}





var res = document.querySelector("button");

	res.onclick = function () {
	window.location.reload();
	//console.log(res);
	}




}
