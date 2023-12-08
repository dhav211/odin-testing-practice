const reverse = require('../scripts/reverse');

test('reverse the word dog', () => {
  expect(reverse('dog')).toBe('god');
});

test('reverse a longer word', () => {
  expect(reverse('clandestine')).toBe('enitsednalc');
});

test('reverse a sentence', () => {
  expect(reverse('Can we reverse this?')).toBe('?siht esrever ew naC');
});
