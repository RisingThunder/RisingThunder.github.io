var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "time-log.txt", true);
	  
	txtFile.onreadystatechange = function() {
		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
		if (txtFile.status === 200) {  // Makes sure the file exists.
		    // no lines = txtFile.responseText; (The lines of text file are not seperated by a comma.)
			// lines = txtFile.responseText.split("\n"); // This will separate each line of the text file lines by a comma (or into arrays).
		var customTextElement2 = document.getElementById('writeData');
		    customTextElement2.innerHTML = txtFile.responseText.split("\n");
			
    /* This part works well enough as it writes to the #writeDate paragraph each line from the text file,
       seperated by a comma, into to what is an array. */
} } };
txtFile.send(null);

var popFile = new XMLHttpRequest();
	popFile.open("GET", "time-log.txt", true);
	  
	popFile.onreadystatechange = function() {
		if (popFile.readyState === 4) {  // Makes sure the document is ready to parse.
		if (popFile.status === 200) {  // Makes sure the file exists.
		    // no lines = txtFile.responseText; (The lines of text file are not seperated by a comma.)
			// lines = txtFile.responseText.split("\n"); // This wil separate each line of the text file lines by a comma (or into arrays).
		var customTextElement2 = document.getElementById('lastStamp');
		    customTextElement2.innerHTML = popFile.responseText.split("\n").pop(); 
			// The .pop() will removes the last element from array and returns that value to the caller.
			
} } };
popFile.send(null);

