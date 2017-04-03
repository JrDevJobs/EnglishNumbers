var numbersBase = {
  0 : '',
  1 : 'one',
  2 : 'two',
  3 : 'three',
  4 : 'four',
  5 : 'five', 
  6 : 'six',
  7 : 'seven',
  8 : 'eight',
  9 : 'nine',
  10: 'ten'
}

var numbersTeens = {
  10 : 'ten',
  11 : 'eleven',
  12 : 'twelve',
  13 : 'thirteen',
  14 : 'fourteen',
  15 : 'fifteen',
  16 : 'sixteen',
  17 : 'seventeen',
  18 : 'eighteen',
  19 : 'nineteen'
}

var numbersBaseTen = {
  10 : 'ten',
  20 : 'twenty',
  30 : 'thirty',
  40 : 'forty',
  50 : 'fifty',
  60 : 'sixty',
  70 : 'seventy',
  80 : 'eighty',
  90 : 'ninety'
}

function englishLanguage(number) {
  if (number === 0) {
    return numbersBase[0];
  } else if (number > 0 && number < 10) {
    return numbersBase[number];
  } else if (number > 10 && number < 20) {
    return numbersTeens[number];
  } else if (number > 19 && number < 100) {
    var remainder = number % 10;
    var firstNumber = number - remainder;
    if (remainder === 0) {
      return numbersBaseTen[number];
    } else {
      return numbersBaseTen[firstNumber] + " " + englishLanguage(remainder);
    }
  } else if (number > 99 && number < 1000) {
    var remainder = number % 100;
    var firstNumber = (number - remainder) / 100;
    return numbersBase[firstNumber] + " hundred " + englishLanguage(remainder).replace(/^\s+/, '').replace(/\s+$/, '').replace("  "," ");
  } else if (number > 999 && number < 1000000) {
    var remainder = number % 1000;
    var firstNumber = (number - remainder) / 1000;
    return englishLanguage(firstNumber) + " thousand " + englishLanguage(remainder).replace(/^\s+/, '').replace(/\s+$/, '').replace("  "," ");
  } else if (number > 999999 && number < 1000000000) {
    var remainder = number % 1000000;
    var firstNumber = (number - remainder) / 1000000;
    return englishLanguage(firstNumber) + " million " + englishLanguage(remainder).replace(/^\s+/, '').replace(/\s+$/, '').replace("  "," ");
  } else if (number > 999999999 && number < 1000000000000) {
    var remainder = number % 1000000000;
    var firstNumber = (number - remainder) / 1000000000;
    return (englishLanguage(firstNumber) + " billion " + englishLanguage(remainder)).replace(/^\s+/, '').replace(/\s+$/, '').replace("  "," ");
  } else if (number > 999999999999 && number < 1000000000000000) {
    var remainder = number % 1000000000000;
    var firstNumber = (number - remainder) / 1000000000000;
    return (englishLanguage(firstNumber) + " trillion " + englishLanguage(remainder)).replace(/^\s+/, '').replace(/\s+$/, '').replace("  "," ");
  }
}
