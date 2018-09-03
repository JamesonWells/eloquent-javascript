function minimumNumber(x, y) {
	
	firstNumber = x;
	
	if (x < y) {
		console.log(`${firstNumber}` + " is less than " + y)
		} else if (y < x) {
		console.log(firstNumber + " is more than " + y)
		} else console.log("They are equal.");
	
};

minimumNumber(9, 3)
minimumNumber(3, 9)
minimumNumber(3, 3)
