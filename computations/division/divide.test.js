const divide = require('./divide');


describe("Calculating quotient of two numbers", () => {

    test("dividing 35 by 5 should return 7", () => {
        expect(divide(35, 5)).toBe(7);
    });
});

