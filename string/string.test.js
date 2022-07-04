

const { 
    uppercase, 
    lowercase
 } =require("./string")

describe("Testing the string module", () => {
    test("should uppercase a string input", () => {

        // expect(uppercase("bob")).toBe("BOB"); is the same as below 2 lines
        const result = uppercase("bob");
        expect(result).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("FULL SAIL")).toBe("full sail");
    });
});

