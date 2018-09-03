let assert = require("assert");

function arrayToList(array) {
	let value = 0;
	let rest = null;
	let list = {};
	for (let i = array.length - 1; i >= 0; i--) {
		value = array[i];
		if (i === array.length -1) {
			list = {value, rest};
		} else {
			rest = list;
			list = {value, rest};
		};
	};
	return list;
};

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	};
	return array;
};

function prepend(anElement, list) {
	let value = anElement;
	let rest = list;
	newList = {value, rest};
	return newList;
};

function nth(list, number) {
	for (let i = 0; i < number; i++) {
		list = list.rest;
		};
	return list.value;
};

function recursiveNth(xlist, number) {
	var ii = 0;
	var xnode = xlist;
	let num = parseInt(number);
	let xdive = function(ii, xnode) {
		if (ii == num) {
			return xnode.value;
		} else {
			xdive(ii + 1, xnode.rest);
		};
	};
	xdive(ii, xnode);
};

let originalList = {value: 10, rest: { value: 20, rest: { value: 30, rest: null}}}

//console.log(arrayToList([10, 20, 30]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(arrayToList(listToArray(prepend(5, originalList))));
//console.log(prepend(5, originalList).rest.rest.rest.rest);
//assert(prepend(5, originalList).rest.rest.rest.rest === null, "Oops");
//console.log(nth(arrayToList([10, 20, 30]), 0));
console.log(recursiveNth(originalList, 1));
