// Your code here.

function loop(value, testFunction, updateFunction, bodyFunction) {
  let currentItem = value;
  while (testFunction(currentItem)) {
    bodyFunction(currentItem);
    currentItem = updateFunction(currentItem);
  };
};


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1