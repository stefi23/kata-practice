const { add, substract  } = require("../main/example");

describe('add test', () => {
    it("should give sum of a + b when adding a and b", () => {
        expect(add(1, 2)).toBe(3);
    })
    it("should give sum of 7 when adding 3 and 4", () => {
        expect(add(3, 4)).toBe(7);
    })
})

describe('substract test', () => {
    it("should give substraction of a - b when adding a and b", () => {
        expect(substract(2, 1)).toBe(1);
    })
    it.skip("should give substraction of 4 when adding 7 and 3", () => {
        expect(substract(7, 3)).toBe(4);
    })
})