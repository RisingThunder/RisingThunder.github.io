let myHeading = document.querySelector('#paragrah1');
	myHeading.textContent = 'Comming Soon! Click here for more information.';
	
	myHeading = document.querySelector('#paragrah2');
	myHeading.textContent = 'Revision 12SEP2019 - Click for info.';
	
	myImage = document.querySelector('img');
	
	myButton = document.querySelector('button');
	myHeading = document.querySelector('#welcomecallsign');
	
alert('Rising Thunder Alfa Test is in the works for 2020!');

document.querySelector('#paragrah1').onclick = function() {
    alert('Mission Map Times are my "next up" item to do. If you can help with how to export the mission time data from DCS, and import this data into a website please contact me, via the DCS forums, user "DigitalEngine". Currently I\'m in the proccess of studying the JavasScript language for this project. Thanks!');
}

//Image Rotation code
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/su25t.jpg') {
      myImage.setAttribute ('src','images/su25t1.jpg');
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
// Revision Date click for alert informaion.
paragrah2.onclick = function () {
	alert('Rising Thunder Alfa Test is in the works for 2020!');	
}
