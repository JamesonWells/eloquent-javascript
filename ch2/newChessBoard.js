let hash = "#";
let space = " ";
let size = prompt("Please choose a board size ", "");
let row = [];
for (let i = 0; i <= parseInt(size); i++) {
	if (i % 2 === 0) {
		row.push(hash);
	} else {
		row.push(space);
	};
};
console.log(row.join(""));