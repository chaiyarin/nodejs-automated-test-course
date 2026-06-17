const { add, subtract, multiply, divide } = require('../src/mathUtils');

test('add 2 + 3 should equal 5', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test('subtract 10 - 4 should equal 6', () => {
    const result = subtract(10, 4);
    expect(result).toBe(6);
});

test('add result is a number type', () => {
    const result = add(1, 1);
    expect(typeof result).toBe('number');
});

test('add returns correct object when wrapped', () => {
    const result = { value: add(2, 3) };
    expect(result).toEqual({ value: 5 });  // ← toEqual for objects
});