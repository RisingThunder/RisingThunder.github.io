function createResponce() {
	let heading = document.createElement('h2');
	heading.textContent = 'You clicked the button! Why did you do that!';
	document.body.appendChild(heading);
	
	let para = document.createElement('p');
	para.textContent = 'Click the button again to see what happens!'
	document.body.appendChild(para);
	
	let fireTruck = document.createElement('img');
	fireTruck.src = '../../images/fire-truck-320.png';
	document.body.appendChild(fireTruck);
}