const Calculator = require('../scripts/calculator');

const calculator = new Calculator();

test('add 1 + 1', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('minus 3 - 2', () => {
  expect(calculator.minus(3, 2)).toBe(1);
});

test('multiply 5 * 2', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('divide 10 / 2', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
