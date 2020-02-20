function createResponce() {
	let heading = document.createElement('h2');
	heading.textContent = 'You clicked on the button! Why did you do that!';
	document.body.appendChild(heading);
	
	let para = document.createElement('p');
	para.textContent = 'See what happens if you click the button again!';
	document.body.appendChild(para);

	let fireTruck = document.createElement('img');
	
	fireTruck.addEventListener('load', function() {
		document.body.appendChild(fireTruck);
	});
	
	fireTruck.src = '../../images/fire-truck-320.png';	
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
	buttons[i].addEventListener('click', createResponce);
}