const mod = require('../scripts/ceaserCipher');

test('shift hello by 3', () => {
  expect(mod.ceaserCipher('hello', 3)).toBe('khoor');
});

test('shift hello by -3', () => {
  expect(mod.ceaserCipher('hello', -3)).toBe('ebiil');
});

test('shift text with punctuation', () => {
  expect(mod.ceaserCipher("Hello! What's your name?", 1)).toBe("ifmmp! xibu't zpvs obnf?");
});

test('loop back on array', () => {
  expect(mod.ceaserCipher('zoo', 2)).toBe('bqq');
});

test('loop back the other way on array', () => {
  expect(mod.ceaserCipher('ass', -2)).toBe('yqq');
});

test('is B a letter', () => {
  expect(mod.isLetter('B')).toBe(true);
});

test('is c a letter', () => {
  expect(mod.isLetter('c')).toBe(true);
});

test('is ! a letter', () => {
  expect(mod.isLetter('!')).toBe(false);
});

test('is , a letter', () => {
  expect(mod.isLetter(',')).toBe(false);
});
