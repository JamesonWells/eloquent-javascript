function countBs(strInput) {
	
	var countOfBs = 0;
	
	var strLength = strInput.length - 1;
	
 while (strLength > -1) {
 
		if (strInput[strLength] === "B") {countOfBs++; strLength--} else {strLength--};
		
	};
	
	console.log(countOfBs);
	
};

countBs("BBJamesonBbB");

