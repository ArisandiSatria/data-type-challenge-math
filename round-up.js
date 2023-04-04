const roundUpToFive = (number) => {
  if (isNaN(number)) {
    return 0;
  } else if (Number(number) % 5 == 0) {
    return Number(number);
  } else if (Number(number) >= 0) {
    return Math.ceil(Number(number) / 5) * 5;
  } else {
    return Math.floor(Number(number) / 5) * 5 + 5;
  }
};

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));
console.log(roundUpToFive("142"));
console.log(roundUpToFive("a"));
console.log(roundUpToFive(-18));
