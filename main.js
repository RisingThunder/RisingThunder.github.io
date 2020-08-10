	myImage = document.querySelector('img');
	myButton = document.querySelector('button');
	myHeading = document.querySelector('#welcomecallsign');
	
	alert('Closed testing has started for Rising Thunder Alpha!');

//Image Rotation code
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/su25t.jpg') {
      myImage.setAttribute ('src','images/a10c.jpg');
    } else {
      myImage.setAttribute ('src','images/su25t.jpg');
    }
}

// Callsign & callsign change button code
function setUserName() {
  let myName = prompt('Please enter your Callsign');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Rising Thunder, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome Back to Rising Thunder, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

