function range(start, end, step = 1) {
  let array = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
        array.push(i);
	};
  } else {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      };
    };
    return array;
};

function sum (anArray) {
  let total = 0;
  for (let i of anArray) {
    total = total += i;
  };
  return total;
};


console.log(sum(range(process.argv[2], process.argv[3])));

console.log(sum([1, 2, 3]));

console.log(range(process.argv[2], process.argv[3], process.argv[4]));

console.log(process.argv);

console.log(sum(range(1, 10)));

console.log(range(10, 1, -2));