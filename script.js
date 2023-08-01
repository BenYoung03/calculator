//Arthimetic functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//Operate function that checks which operator is being used and calls the appropriate function

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

//Display and button variables
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.button');
let displayValue = '';
let firstNum = null;
let result = null;
let operator = null;

//Event listeners for each button including clear, add, subtract, multiply, divide, and equals
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'clear'){
            displayValue = '';
            display.textContent = displayValue;
            firstNum = null;
            result = null;
            operator = null;
        } else if(button.id === 'add'){
            if(firstNum === null){
                firstNum = parseInt(displayValue);
                displayValue = '';
                display.textContent = displayValue;
                operator = '+';
            } else {
                let secondNum = parseInt(displayValue);
                firstNum = operate(firstNum, secondNum, operator);
                display.textContent = ''; //Maybe change this to display the firstNum value
                operator = '+';
                displayValue = '';
            }
        } else if(button.id === 'subtract'){
            // handle subtraction button
        } else if(button.id === 'multiply'){
            // handle multiplication button
        } else if(button.id === 'divide'){
            // handle division button
        } else if (button.id === 'equals'){
            if(firstNum !== null && operator !== null){
                let secondNum = parseInt(displayValue);
                result = operate(firstNum, secondNum, operator);
                displayValue = result.toString();
                display.textContent = displayValue;
                firstNum = null;
                operator = null;
            }
        } else {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
    });
});