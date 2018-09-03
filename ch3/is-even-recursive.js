function isEven(test) {
	
	test = Math.abs(test);
	
	if(test === 0) {
		console.log("Number is even.")
	} else if (test === 1) {
		console.log("Number is odd.")
	} else { isEven(test - 2)
	};
	
};

isEven(-126);
