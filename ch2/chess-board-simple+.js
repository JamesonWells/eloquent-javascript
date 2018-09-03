let hash = "#";
let space = " ";
let row = "";
let size = prompt("size?", " ");
let column = size;

while (size > 0) {
	row = row + (size % 2 != 0 ? hash : space);
 size--;
}

while (column > 0) {
	console.log(row);
	column--;
	
}
