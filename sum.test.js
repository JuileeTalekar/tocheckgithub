import sum from './sum.js';

test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
});

describe("Sum function tests", () => {
    test("adds -1 + 1 to equal 0", () => {
        expect(sum(-1, 1)).toBe(0);
    });
});

test("adds 10 + 10 to equal 20", () => {
    expect(sum(10, 10)).toBe(20);
});