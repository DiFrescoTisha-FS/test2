const multiply = require('./multiply');

describe("Calculating product of two numbers", () => {

    test("multiplying 8 * 2 should return 16", () => {
        expect(multiply(8, 2)).toBe(16);
    });
});