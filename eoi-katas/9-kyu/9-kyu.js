function sum(num1, num2) {
    return num1 + num2;
}

function numArgs(...args) {
    return args.length;
  }

  function getEight() {
    const array = ['a','a','a','a','a','a','a','a'];
    return array.length;
  }
  
module.exports = { sum, numArgs, getEight };