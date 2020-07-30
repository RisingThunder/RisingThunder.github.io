/* This line is added as an attempt force the time data to refresh in the client browser. Having a issue where the time data
     being loaded into the browser will be from what appears to be cached data from the dcs-time.txt file, causing the time
     not the become updated on the html page as this script is run. This happens when revisiting the html page after sometime
	 has passed (next day for example). */
onload="location.reload();"

let myHeading = document.querySelector('#paragrah1');
	myHeading.textContent = 'Comming Soon! Click here for information on how you can help.';
	
	myImage = document.querySelector('img');
	
	myButton = document.querySelector('button');
	myHeading = document.querySelector('#welcomecallsign');
	
	alert('Rising Thunder Alfa Test is in the works for 2020!');

document.querySelector('#paragrah1').onclick = function() {
    alert('Mission Map Times are my "next up" item to do. If you can help with how to extract data from an .innerHTML, which is stored into a "const" (JavaScript), please contact me, via the DCS forums, user "DigitalEngine". Currently I\'m in the proccess of studying the JavasScript language for this project. Thanks!');
}

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

