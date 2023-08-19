const { input } = require("./input");
const { getCommonElement } = require("./utils");

const codePoints = input.map((line) => {
  const a_code = "a".charCodeAt(0);
  const A_code = "A".charCodeAt(0);
  const left_side = line.slice(0, line.length / 2);
  const right_side = line.slice(line.length / 2);
  let [common] = getCommonElement(left_side, right_side);
  if (/[a-z]/.test(common)) {
    return common.charCodeAt(0) - a_code + 1;
  } else {
    return common.charCodeAt(0) - A_code + 27;
  }
});

console.log(codePoints.reduce((a, b) => a + b));
