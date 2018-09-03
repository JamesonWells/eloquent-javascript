function reversingAnArray (array) {
	let 	newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.unshift(array[i]);
	};
	return newArray;
};

console.log(reversingAnArray(["A", "B","C", "D"]));
