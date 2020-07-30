  /* This line is added as an attempt force the time data to refresh in the client browser. Having a issue where the time data
     being loaded into the browser will be from what appears to be cached data from the dcs-time.txt file, causing the time
     not the become updated on the html page as this script is run. This happens when revisiting the html page after sometime
	 has passed (next day for example). */
  onload="location.reload();"
  
  const fullData = document.getElementById('writeData').hidden = true;
  const lastData = document.getElementById('lastStamp');
  const worldTime = document.getElementById('postTime');
  const progressTime = document.getElementById('timeBar');
 
    
 
	function fetchData() {
      
	  console.log('Fetching updated data.');
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "data/dcs-time.txt", true);
      xhr.onload = function() {
        updateDisplay(xhr.response);
      }
      xhr.send();
	  
    }

    function updateDisplay(text) {
	  
	  // This line is added as an attempt to force the time data to refresh in the browser also,
	  // not sure it really does anyting though (seems not to work).
	  document.getElementById('writeData').innerHTML = "";
      
	  fullData.textContent = text;

      let timeArray = text.split('\n');
      
      // included because some file systems always include a blank line at the end of text files.
      if(timeArray[timeArray.length-1] === '') {
        timeArray.pop();
      }
	  
      lastData.textContent = timeArray[timeArray.length-1];
	  sliceTime = timeArray[timeArray.length-1].slice(6, -1);
	  
	  getTime = Number(sliceTime); // This is in secounds value.
	  startTime = 21600 // This is in a secounds value (in this example, starting off the mission @ 0600).
	  calTime = ( startTime + getTime ) / 60 ; // This is the current time in total minutes.
	  hourTime = Math.floor(calTime / 60); // This returns the largest whole hour value.
	  minuteTime = Math.floor(calTime % 60); // This returns any minutes to the largest whole minute.
	  
	  if (minuteTime < 10) {minuteTime = '0' + minuteTime}; // Configures the time format to 00:00.
	  if (hourTime < 10) {hourTime = '0' + hourTime};
	  
	  worldTime.textContent = hourTime + ':' + minuteTime;
	  
	  // If the mission is exited, then the DCS World Time will display "Server Off-Line".
	  if (lastData.textContent === 'EXIT') {worldTime.textContent = 'Server Off-Line'};
	  
	  // The progress bar is caculated in secounds, for time cycles of 8 hour duration.
	  progressTime.value = getTime;
      
	}
	
	setInterval(fetchData, 6000);
	