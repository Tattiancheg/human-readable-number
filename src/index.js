module.exports = function toReadable (number) {
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var elev = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];

  var numString = number.toString();
  if (number < 0) throw new Error('Undefined');

  if (number === 0) return 'zero';

  
  if (number < 20) {
    return ones[number];
  }

  if (numString.length === 2 && (numString[1]) === '0') {
    return tens[numString[0]];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' hundred'
    else if (numString[1] === '1')
    return ones[numString[0]] + ' hundred ' + elev[numString[2].trimRight()];
    else if (numString[1] === '0') 
    return ones[numString[0]] + ' hundred ' + ones[numString[2].trimRight()];
    else if (numString[2] === '0')
    return ones[numString[0]] + ' hundred ' + tens[numString[1]];
  }
      return ones[numString[0]] + ' hundred ' + tens[numString[1]] + ' ' + ones[numString[2].trimRight()];
  }

