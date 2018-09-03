let oddRow = "# # # # ";
let evenRow = " # # # #";
let size = 8;

while (size > 0) {
	console.log(size % 2 != 0 ? evenRow : oddRow);
 size--;
}