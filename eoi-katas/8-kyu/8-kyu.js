function getHelloWorld() {
  return 'Hello World';
}

function getStringByCondition(condition) {
  if (typeof condition !== 'boolean') {
    throw new Error('Input must be a boolean');
  }

  if (condition === true) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

function addKataToInput(addkata) {
  return addkata + " kata";
}

function basicCalculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

function negativeNumber(number) {
  if (typeof number === 'number') {
    if (number < 0) {
      return number; // Devuelve el mismo número si es negativo
    }
    return -number; // Convierte a negativo si es positivo o cero
  } else {
    return null;
  }
}

function basicCalculatorWithValidation(num1, num2, operator) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return null;;
    }
  } else {
    return null; // Si alguno de los dos primeros argumentos no es un número, devuelve null
  }
}

function sumNumbersInArray(numbers) {
  if (!Array.isArray(numbers)) {
    return 0; // Si el argumento no es un array, devuelve 0
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  }
  return sum;
}

function countNegativeNumbersInArray(numbers) {
  if (!Array.isArray(numbers)) {
    return 0; // Si el argumento no es un array, devuelve 0
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number' && numbers[i] < 0) {
      sum++;
    }
  }
  return sum;
}

function converToEuro(number) {
  if (typeof number !== 'number') {
    return '0.00€'; // Si el argumento no es un número o es NaN, devuelve '0.00€'
  }

  const formattedNumber = number.toFixed(2); // Redondea a 2 decimales
  return `${formattedNumber}€`; // formattedNumber + "€";
}

function abbreviateWords(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string' || word1 === '' || word2 === '') {
    return null; // Si alguno de los argumentos no es un string o es la string vacía, devuelve null
  }
  const initial1 = word1.charAt(0).toUpperCase();
  const initial2 = word2.charAt(0).toUpperCase();

  return `${initial1}.${initial2}`;
}

function filterByWord(phrase, filter) {

  if (typeof phrase !== 'string' || typeof filter !== 'string') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }

  return phrase.split(filter).join('');
}

function reverse(word) {
  if (typeof word !== 'string') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }
  return word.split('').reverse().join('');
}

function isAllUpperCase(word) {
  if (typeof word !== 'string') {
    return false; // Si alguno de los argumentos no es un string, devuelve null
  }
  return word === word.toUpperCase();
}

function isPalindrome(word) {
  if (typeof word !== 'string') {
    return false; // Si alguno de los argumentos no es un string, devuelve null
  }
  word = word.toLowerCase();

  return word === word.split('').reverse().join('');
}

function filterAndReverse(word, filter, reverse) {
  if (
    typeof word !== 'string'|| 
    typeof filter !== 'string' || 
    typeof reverse !== 'boolean') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }
  
  word = word.split('').filter(char => char !== filter).join(''); // Filtro la palabra

  if (reverse) {
    word = word.split('').reverse().join('');
  }

  return word;
}

function repeatWord(phrase, number) {
  if (
    typeof phrase !== 'string'|| 
    typeof number !== 'number') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }
  let result = '';

  for (let i = 0; i < number; i++) {
    result += phrase;
  }
  return result;
}

function replaceWordInSentence(phrase, pattern, word) {
  if (
    typeof phrase !== 'string'|| 
    typeof pattern !== 'string' || 
    typeof word !== 'string') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }

  // patron vacio = frase original
  if (pattern == '') {
    return phrase;
  }

  // dividir frase
  const part = phrase.split(pattern);

  // unir frase
  const newPhrase = part.join(word);

  return newPhrase;
}

function sumNumbersToFinalNumber(number) {
  if (
    typeof number !== 'number'|| number < 1) {
    return 0; // Si alguno de los argumentos no es un string, devuelve null
  }

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function largestExpression(a, b, c) {
  if (
    typeof a !== 'number'|| 
    typeof b !== 'number' || 
    typeof c !== 'number') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }
  const expression = [
    a+b+c,
    a+b*c,
    a*b+c,
    a*b*c,
    (a+b)*c,
    a*(b+c)
  ];

  return Math.max(...expression);
}

function largestExpressionAdvance(a,b,c) {
  if (
    typeof a !== 'number'|| 
    typeof b !== 'number' || 
    typeof c !== 'number') {
    return null; // Si alguno de los argumentos no es un string, devuelve null
  }
  const expression = [
    a+b+c,
    a+(b*c),
    a*(b+c),
    a*b*c,
    (a+b)*c,
    a*(b+c)
  ];

  let max = expression[0];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] > max) {
      max = expression[i];
    }
  }
  return max;
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
  repeatWord,
  filterAndReverse,
  replaceWordInSentence,
  sumNumbersToFinalNumber,
  largestExpression,
  largestExpressionAdvance,
};
