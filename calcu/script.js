
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const inputAnswer = document.querySelector('.inputAnswer');
const equation = document.querySelector('.equation');
const clear = document.getElementById('clear');
const deleteInputs = document.getElementById('delete');
const squareRootButton = document.getElementById('squareRoot');
const squaredButton = document.getElementById('squared');
const calculateButton = document.getElementById('calculate');
const allClearButton = document.getElementById('allClear');

let operand1 = null;
let operator = null;

// Event Listeners
numbers.forEach(number => {
    number.addEventListener('click', displayNumber);
});

operators.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        prepareOperation(operatorButton.textContent);
    });
});

clear.addEventListener('click', clearInput);
deleteInputs.addEventListener('click', deleteInput);
squareRootButton.addEventListener('click', squareRootOf);
squaredButton.addEventListener('click', squareOf);
calculateButton.addEventListener('click', performCalculation);
allClearButton.addEventListener('click', clearAll);

// Functions
function displayNumber(event) {
    const clickedNumber = event.target;
    const inputValue = inputAnswer.textContent;
    if (inputValue === '0') {
        inputAnswer.textContent = clickedNumber.textContent;
    } else {
        inputAnswer.textContent += clickedNumber.textContent;
    }
}

function clearInput() {
    inputAnswer.textContent = '0';
}

function deleteInput() {
    let inputValue = inputAnswer.textContent;
    if (inputValue.length > 1) {
        inputValue = inputValue.slice(0, -1);
        inputAnswer.textContent = inputValue;
    } else {
        inputAnswer.textContent = '0';
    }
}

function prepareOperation(selectedOperator) {
    operand1 = parseFloat(inputAnswer.textContent);
    operator = selectedOperator;
    equation.textContent = operand1 + " " + operator;
    inputAnswer.textContent = '0';
}

function performCalculation() {
    const inputValue = parseFloat(inputAnswer.textContent);
    if (operand1 !== null && operator !== null) {
        let result;
        switch (operator) {
            case '+':
                result = operand1 + inputValue;
                break;
            case '-':
                result = operand1 - inputValue;
                break;
            case '*':
                result = operand1 * inputValue;
                break;
            case '÷':
                result = operand1 / inputValue;
                break;
            case '%':
                result = (operand1 / 100) * inputValue;
                break;
            default:
                break;
        }
        inputAnswer.textContent = result.toString();
        equation.textContent = ''; 
        operand1 = null;
        operator = null;
    }
}

function squareRootOf() {
    const inputValue = parseFloat(inputAnswer.textContent);
    if (inputValue >= 0) {
        const result = Math.sqrt(inputValue);
        inputAnswer.textContent = result.toString();
        equation.textContent = `√ ${inputValue}`;
    }
}

function squareOf() {
    const inputValue = parseFloat(inputAnswer.textContent);
    const result = Math.pow(inputValue, 2);
    inputAnswer.textContent = result.toString();
    equation.textContent = `${inputValue}²`;
}

function clearAll() {
    inputAnswer.textContent = '0';
    equation.textContent = '';
    operand1 = null;
    operator = null;
}
