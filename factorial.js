function factorial(x) {
  if (typeof x == "number" && x <= 69 && x >= 0) {
    if (x === 0) {
      return 1;
    } else {
      let xFactorial = x * factorial(x - 1);
      return xFactorial;
    }
  } else {
    return NaN;
  }
}
console.log(factorial(10));

module.exports = factorial;