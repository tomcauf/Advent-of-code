const getCommonElement = (...args) => {
    const counts = {};
    args.forEach((arr) =>
        [...new Set(arr)].forEach((val) => (counts[val] = (counts[val] || 0) + 1))
    );
    return Object.keys(counts).filter((val) => counts[val] === args.length);
};
const splitIntoSegments = (arr, num) => {
    const segments = [];
    for (let i = 0; i < arr.length; i += num) {
        segments.push(arr.slice(i, i + num));
    }
    return segments;
};

module.exports = {
    getCommonElement,
    splitIntoSegments,
};