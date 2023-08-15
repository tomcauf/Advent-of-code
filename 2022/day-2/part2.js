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
    //X = PERDU
    //Y = NULL
    //Z = GAGNE
    if (right === 'X') {
        return leftHand - 1 || 3;
    } else if (right === 'Y') {
        return leftHand + 3;
    } else {
        return (((leftHand + 1) % 3) || 3) + 6;
    }
});

console.log(rounds.reduce((acc, round) => acc + round, 0));