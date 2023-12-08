function ceaserCipher(word, shiftAmount) {
  let ciphered = [];
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  for (let i in word) {
    if (isLetter(word[i])) {
      let letterPosition = word.toLowerCase().charCodeAt(i) - 97 + shiftAmount;

      if (letterPosition < 0) {
        letterPosition = 26 - Math.abs(letterPosition);
      } else if (letterPosition > 25) {
        letterPosition = letterPosition - 26;
      }

      ciphered += letters[letterPosition];
    } else {
      ciphered += word[i];
    }
  }

  return ciphered;
}

function isLetter(character) {
  const charCode = character.charCodeAt(0);
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    return true;
  }

  return false;
}

module.exports = { ceaserCipher, isLetter };
