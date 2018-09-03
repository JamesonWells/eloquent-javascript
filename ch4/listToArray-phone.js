function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	};
	return array;
};

list = {
	value: 10,
	rest: {
		value: 20,
		rest: null
		}
	};
	
	console.log(listToArray(list));