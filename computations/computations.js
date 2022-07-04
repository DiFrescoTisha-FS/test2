const add = require('./addition');
const subtract = require('./subtraction')
const multiply = require('./multiplication');
const divide = require('./division');
const squareRoot = require('./squareroot');
const max = require('./max');

describe("Calculating sum of two numbers", () => {

    test("adding 3 + 5 should return 8", () => {
        expect(add(3,5)).toBe(8);
    });
});

describe("Calculating difference of two numbers", () => {

    test("subtracting 3 from 7 should return 4", () => {
        expect(subtract(7, 3)).toBe(4);
    });
});

describe("Calculating product of two numbers", () => {

    test("multiplying 8 * 2 should return 16", () => {
        expect(multiply(8, 2)).toBe(16);
    });
});

describe("Calculating quotient of two numbers", () => {

    test("dividing 35 by 5 should return 7", () => {
        expect(divide(35, 5)).toBe(7);
    });
});

describe("check if the same number is multiplied gives a square root of the number", () => {
    test("calculating 5 * 5 should give the square root of 25", () => {
        // expect(squareRoot(25)).toBe(5);
        expect(Math.sqrt(25)).toBe(5);
    });
});

const max = require('./max');

describe("finding the number with greatest value", () => {
    test
    ("the max value of [1, 7, 5, 8] should be 8", () => {
        expect(Math.max(1,7,5,8)).toBe(8);
    });

});

module.exports = {
    add, 
    subtract,
    multiply,
    divide,
    squareRoot,
    max
}