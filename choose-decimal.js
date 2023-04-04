const chooseDecimals = (n, d = 0) => {
  if (d < 0) {
    d = 0;
  }
  return Number(n).toFixed(Number(d));
};

console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2));
console.log(chooseDecimals(-12000));
console.log(chooseDecimals("2100", 2));
console.log(chooseDecimals("2100", -2));
