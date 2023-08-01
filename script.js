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
        return add(firstNum, secondNum).toFixed(2);
    } else if (operator === '-'){
        return subtract(firstNum, secondNum).toFixed(2);
    } else if (operator === '*'){
        return multiply(firstNum, secondNum).toFixed(2);
    } else {
        if(secondNum === 0){ 
            display.textContent = 'Cannot divide by 0';
            return null;
        }
        return divide(firstNum, secondNum).toFixed(2);
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
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseInt(displayValue);
                displayValue = '';
                display.textContent = displayValue;
                operator = '+';
            } else {
                let secondNum = parseInt(displayValue);
                display.textContent = '';
                firstNum = operate(firstNum, secondNum, operator);
                operator = '+';
                displayValue = '';
            }
        } else if(button.id === 'subtract'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseInt(displayValue);
                displayValue = '';
                display.textContent = displayValue;
                operator = '-';
            } else {
                let secondNum = parseInt(displayValue);
                display.textContent = ''; //Maybe change this to display the firstNum value
                firstNum = operate(firstNum, secondNum, operator);    
                operator = '-';
                displayValue = '';
            }
        } else if(button.id === 'multiply'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseInt(displayValue);
                displayValue = '';
                display.textContent = displayValue;
                operator = '*';
            } else {
                let secondNum = parseInt(displayValue);
                display.textContent = ''; //Maybe change this to display the firstNum value
                firstNum = operate(firstNum, secondNum, operator);
                operator = '*';
                displayValue = '';
            }
        } else if(button.id === 'divide'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseInt(displayValue);
                displayValue = '';
                display.textContent = displayValue;
                operator = '/';
            } else {
                let secondNum = parseInt(displayValue);
                if(secondNum === 0){
                    display.textContent = 'OOPSIE!';
                    return;
                }
                display.textContent = ''; //Maybe change this to display the firstNum value
                firstNum = operate(firstNum, secondNum, operator);
                operator = '/';
                displayValue = '';
            }
        } else if (button.id === 'equals'){
            if(firstNum !== null && operator !== null){
                let secondNum = parseInt(displayValue);
                let result = operate(firstNum, secondNum, operator);
                if(result === null){
                    // Handle divide by 0 error
                    displayValue = '';
                    firstNum = null;
                    operator = null;
                } else {
                    displayValue = result.toString();
                    display.textContent = displayValue;
                    firstNum = null;
                    operator = null;
                }
            }
        } else {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
    });
});