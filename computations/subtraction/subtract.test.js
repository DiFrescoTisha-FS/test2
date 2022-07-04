const subtract = require("./subtract");

describe("Calculating difference of two numbers", () => {

    test("subtracting 3 from 7 should return 4", () => {
        expect(subtract(7, 3)).toBe(4);
    });
});
