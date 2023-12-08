const capitalize = require('../scripts/capitalize');

test('capitalize the word dog', () => {
  expect(capitalize('dog')).toBe('Dog');
});

test('capitalize capitalzed word', () => {
  expect(capitalize('Dog')).toBe('Dog');
});

test('capitalize sentence', () => {
  expect(capitalize('the cool dog')).toBe('The cool dog');
});
