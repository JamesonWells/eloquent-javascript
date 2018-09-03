function countChar(strInput, char) {
	
	var countOfChar = 0;
	
	var strLength = strInput.length - 1;
	
 while (strLength > -1) {
 
		if (strInput[strLength] === char) {countOfChar++; strLength--} else {strLength--};
		
	};
	
	console.log(countOfChar);
	
};

countChar("BBJammmessonBbB", "m");

