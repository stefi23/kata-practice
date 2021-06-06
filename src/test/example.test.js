// import add from "../main/example";
const add = require("../main/example");

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        expect(add(1, 2)).toBe(3);
    })
})