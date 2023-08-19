const { input } = require("./input");
const { getCommonElement, splitIntoSegments } = require("./utils");

const segments = splitIntoSegments(
    input.map((v) => v.split("")),
    3
);

const codePoints = segments.map((segment) => {
    const a_code = "a".charCodeAt(0);
    const A_code = "A".charCodeAt(0);
    let [common] = getCommonElement(...segment);
    if (/[a-z]/.test(common)) {
        return common.charCodeAt(0) - a_code + 1;
    } else {
        return common.charCodeAt(0) - A_code + 27;
    }
});

console.log(codePoints.reduce((a, b) => a + b));
