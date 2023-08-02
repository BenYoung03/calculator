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
    let result = 0;
    decimal = false;
    if(operator === '+'){
        result = add(firstNum, secondNum);
    } else if (operator === '-'){
        result = subtract(firstNum, secondNum);
    } else if (operator === '*'){
        result = multiply(firstNum, secondNum);
    } else {
        if(secondNum === 0){ 
            display.textContent = 'Cannot divide by 0';
            return null;
        }
        result = divide(firstNum, secondNum);
    }
    if(Number.isInteger(result)){
        return result.toString();
    } else {
        return result.toFixed(4);
    }
}

//Display and button variables
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.button');
let displayValue = '';
let firstNum = null;
let result = null;
let operator = null;
let decimal = false;

function updateDisplay(){
    displayValue = '';
    display.textContent = displayValue;
    decimal = false;
}
//Event listeners for each button including clear, add, subtract, multiply, divide, and equals
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'clear'){
            updateDisplay();
            firstNum = null;
            result = null;
            operator = null;
        } else if(button.id === 'add'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseFloat(displayValue);
                updateDisplay();
                operator = '+';
            } else {
                let secondNum = parseFloat(displayValue);
                firstNum = operate(firstNum, secondNum, operator);
                decimal = false;
                displayValue = firstNum.toString();
                display.textContent = displayValue;
                operator = '+';
                displayValue = '';
            }
        } else if(button.id === 'subtract'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseFloat(displayValue);
                updateDisplay();
                operator = '-';
            } else {
                let secondNum = parseFloat(displayValue);
                firstNum = operate(firstNum, secondNum, operator);
                decimal = false;
                displayValue = firstNum.toString();
                display.textContent = displayValue;  
                operator = '-';
                displayValue = '';
            }
        } else if(button.id === 'multiply'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseFloat(displayValue);
                updateDisplay();
                operator = '*';
            } else {
                let secondNum = parseFloat(displayValue);
                firstNum = operate(firstNum, secondNum, operator);
                decimal = false;
                displayValue = firstNum.toString();
                display.textContent = displayValue;  
                operator = '*';
                displayValue = '';
            }
        } else if(button.id === 'divide'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum === null){
                firstNum = parseFloat(displayValue);
                updateDisplay();
                operator = '/';
            } else {
                let secondNum = parseFloat(displayValue);
                if(secondNum === 0){
                    display.textContent = 'OOPSIE!';
                    return;
                }
                firstNum = operate(firstNum, secondNum, operator);
                decimal = false;
                displayValue = firstNum.toString();
                display.textContent = displayValue;  
                operator = '/';
                displayValue = '';
            }
        } else if (button.id === 'equals'){
            if(display.textContent === '') displayValue = '0';
            if(firstNum !== null && operator !== null){
                let secondNum = parseFloat(displayValue);
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
                equals = true;
            }
        } else if (button.id === 'decimal'){
            if(!decimal){
                displayValue += '.';
                display.textContent = displayValue;
                decimal = true;
            }
        } else if (button.id === 'backspace'){
            displayValue = displayValue.slice(0, -1);
            display.textContent = displayValue;
        } else {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
    });
});