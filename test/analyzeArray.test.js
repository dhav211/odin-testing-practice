const analyzeArray = require('../scripts/analyzeArray');

test('analyze test', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('empty array', () => {
  expect(analyzeArray([])).toStrictEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});

test('some negative numbers', () => {
  expect(analyzeArray([-1, -8, 3, -4, -2, 6])).toStrictEqual({
    average: -1,
    min: -8,
    max: 6,
    length: 6,
  });
});
