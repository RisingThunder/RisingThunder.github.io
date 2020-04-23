 const fullData = document.getElementById('writeData');
 const lastData = document.getElementById('lastStamp');
 // var getTime = lastData.innerHTML;
	
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
    }
    
	setInterval(fetchData, 6000);
	