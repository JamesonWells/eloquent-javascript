let hash = "#";
let space = " ";
let newline = "\n";
let size = prompt("Please choose a board size ", " ");
let counter = size;

function printRow(size) {
  let click = size;
  let boardRow = "#";
  while (click >= 1) {
  boardRow = boardRow + (click % 2 !== 0 ? hash : space);
  click --;
  }
  boardRow = boardRow + newline;
}

while (counter >=1){
  printRow(size);
  counter--;
  }
