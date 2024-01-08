const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let firstOperand;
let operation;

buttons.forEach(button => {
 button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      display.value = '';
      firstOperand = null;
      operation = null;
    } else if (isNaN(parseInt(button.textContent))) {
      if (operation) {
        return;
      }
      if (!firstOperand) {
        firstOperand = parseFloat(display.value);
      } else {
        firstOperand = performOperation(firstOperand, parseFloat(display.value), operation);
      }
      operation = button.textContent;
      display.value = '';
    } else {
      display.value += button.textContent;
    }

    if (button.textContent === '=') {
      if (!firstOperand || !operation) {
        return;
      }
      display.value = performOperation(firstOperand, parseFloat(display.value), operation);
      firstOperand = null;
      operation = null;
    }
 });
});

function performOperation(firstOperand, secondOperand, operation) {
 switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
 }}
