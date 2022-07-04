const add = require("./add");

// const multiply = require("./multiply");
// const divide = require("./divide");
// const squareRoot = require("./square");
// const max = require("./max");

describe("Calculating sum of two numbers", () => {

    test("adding 3 + 5 should return 8", () => {
        expect(add(3,5)).toBe(8);
    });
});

