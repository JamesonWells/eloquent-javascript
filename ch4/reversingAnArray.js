function reverseArray (array) {
	for (let i = 0; i < array.length - 1; i++) {
		array.splice(i, 0, (array.pop()));
	};
	return array;
};

console.log(reverseArray(["A", "B","C", "D"]));

//array.splice(index, 0, item);
//will insert item into array at the specified index
//(deleting 0 items first, that is, it's just an insert)