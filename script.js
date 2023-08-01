let firstNum = 0;
let secondNum = 0;
let operator = "";


function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator){
    if(operator === '+'){
        return add(firstNum, secondNum);
    } else if (operator === '-'){
        return subtract(firstNum, secondNum);
    } else if (operator === '*'){
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}