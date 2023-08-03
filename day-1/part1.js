const { input } = require("./input");

const sums = input
  .map((line) => {
    return line
      .split("\n")
      .map((item) => parseInt(item, 10))
      .reduce((acc, item) => acc + item, 0);
  })
  .sort((a, b) => b - a);

console.log(sums[0]);
