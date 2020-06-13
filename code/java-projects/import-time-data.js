  const fullData = document.getElementById('writeData');
  const lastData = document.getElementById('lastStamp');
    let worldTime = document.getElementById('postTime');
	let progressTime = document.getElementById('timeBar');
 
	function fetchData() {
      console.log('Fetching updated data.');
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "time-log.txt", true);
      xhr.onload = function() {
        updateDisplay(xhr.response);
      }
      xhr.send();
	  
    }

    function updateDisplay(text) {
      fullData.textContent = text;

      let timeArray = text.split('\n');
      
      // included because some file systems always include a blank line at the end of text files.
      if(timeArray[timeArray.length-1] === '') {
        timeArray.pop();
      }
	  
      lastData.textContent = timeArray[timeArray.length-1];
	  
	  sliceTime = timeArray[timeArray.length-1].slice(6, -1);
	  
	  getTime = Number(sliceTime);
	  
	  calTime = 600 + getTime / 60;
	  
	  worldTime.textContent = calTime;
	  
	  progressTime = worldTime.textContent;
	  
    }
 	extractTime = progressTime;


	setInterval(fetchData, 6000);
	
	 