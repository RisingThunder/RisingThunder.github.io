// Function: creates a new element and appends it to the bottom of the HTML body.

function createResponce() {
	let heading = document.createElement('h2');
	heading.textContent = 'You clicked on the button! Why did you do that!';
	document.body.appendChild(heading);
	
	let para = document.createElement('p');
	para.textContent = 'See what happens if you click the button again!';
	document.body.appendChild(para);

	let fireTruck = document.createElement('img');
	
	// when you are running the example online rather than locally, you might want to wait until the image is loaded
	// before appending it to the page, so something like this would be more robust:
	
	fireTruck.addEventListener('load', function() {
		document.body.appendChild(fireTruck);
	});
	
	fireTruck.src = '../../images/fire-truck-320.png';	
}

/*
	1. Get references to all the buttons on the page in an array format.
	2. Loop through all the buttons and add a click event listener to each one.
	
	When any button is pressed, the createResponce() function will be run.
*/
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
	buttons[i].addEventListener('click', createResponce);
}