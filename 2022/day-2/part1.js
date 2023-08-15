const { input } = require("./input");
const hand = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
};
const rounds = input.map(([left, right]) => {
    const leftHand = hand[left];
    const rightHand = hand[right];
    const diff = Math.abs(leftHand - rightHand);

    if (leftHand === rightHand) {
        return rightHand + 3;
    } else if ((diff === 1 && rightHand > leftHand) || (rightHand === 1 && leftHand === 3)) {
        return rightHand + 6;
    } else {
        return rightHand;
    }
});

console.log(rounds.reduce((acc, curr) => acc + curr, 0));
