function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(122));

xarray = [1, 2, 3];
console.log(xarray.some(x => x > 2));