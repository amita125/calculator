const calculate = require('./calculation');

test('Adds 1 + 2 to equal 3', () => {
    expect(calculate(1+1)).toBe(2);
});
test('Subtract 2 - 1 to equal 1', () => {
    expect(calculate(2-1)).toBe(1);
});
test('Multiply 2 * 1 to equal 2', () => {
    expect(calculate(2*1)).toBe(2);
});
test('Divide 2/1 to be 2', () => {
    expect(calculate(2/1)).toBe(2);
});
test('Round 9/7 result to equal 1.29', () => {
    expect(calculate(9/7)).toBe(1.29);
});
test('eval (8+9*2/7*4-2+1.1) to equal 17.39 ', () => {
    expect(calculate(8+9*2/7*4-2+1.1)).toBe(17.39);
});


