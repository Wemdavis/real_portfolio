const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const plusMinusBtn = document.getElementById('plus-minus');
let previousOperand = '';
let currentOperand = '';
let operator = null;

function clear() {
  previousOperand = '';
  currentOperand = '';
  operator = null;
  display.innerText = '0';
}

function appendNumber(number) {
  if (currentOperand.length === 1 && currentOperand[0] === '0' && number === '0') {
    return;
  }
  if (currentOperand.includes('.') && number === '.') {
    return;
  }
  currentOperand += number;
  display.innerText = currentOperand;
}

function chooseOperator(selectedOperator) {
  if (currentOperand === '') {
    return;
  }
  if (selectedOperator === '+/-') {
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    display.innerText = currentOperand;
    return;
  }
  if (previousOperand !== '') {
    compute();
  }
 
  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let result;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return;
  }
  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
      case '+/-':
        result = current * -1;
        break;
    default:
      return;
  }
  
  currentOperand = result.toFixed(4).toString();
  previousOperand = '';
  operator = null;
  display.innerText = currentOperand;
}

function addEventListeners() {
  document.getElementById('clear').addEventListener('click', clear);
  document.getElementById('zero').addEventListener('click', () => appendNumber('0'));
  document.getElementById('one').addEventListener('click', () => appendNumber('1'));
  document.getElementById('two').addEventListener('click', () => appendNumber('2'));
  document.getElementById('three').addEventListener('click', () => appendNumber('3'));
  document.getElementById('four').addEventListener('click', () => appendNumber('4'));
  document.getElementById('five').addEventListener('click', () => appendNumber('5'));
  document.getElementById('six').addEventListener('click', () => appendNumber('6'));
  document.getElementById('seven').addEventListener('click', () => appendNumber('7'));
  document.getElementById('eight').addEventListener('click', () => appendNumber('8'));
  document.getElementById('nine').addEventListener('click', () => appendNumber('9'));
  document.getElementById('decimal').addEventListener('click', () => appendNumber('.'));
  document.getElementById('add').addEventListener('click', () => chooseOperator('+'));
  document.getElementById('subtract').addEventListener('click', () => chooseOperator('-'));
  document.getElementById('multiply').addEventListener('click', () => chooseOperator('*'));
  document.getElementById('divide').addEventListener('click', () => chooseOperator('/'));
  document.getElementById('equals').addEventListener('click', compute);
  document.getElementById('plus-minus').addEventListener('click', () => chooseOperator('+/-'));
}
addEventListeners();