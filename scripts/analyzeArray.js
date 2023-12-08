function analyzeArray(numbers) {
  return {
    average: average(numbers),
    min: numbers.length > 0 ? Math.min(...numbers) : 0,
    max: numbers.length > 0 ? Math.max(...numbers) : 0,
    length: numbers.length,
  };
}

function average(numbers) {
  try {
    return Math.floor(
      numbers.reduce((accumlator, currentValue) => accumlator + currentValue) / numbers.length
    );
  } catch {
    return 0;
  }
}

module.exports = analyzeArray;
