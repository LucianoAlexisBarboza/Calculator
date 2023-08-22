let num1; 
let num2;
let operator;
let result;
let number1 = []; 
let number2 = [];
let operatorCount = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
   return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
}

const number = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

//Event listeners
number.forEach((num) => {
    num.addEventListener('click', () => {
        if (operator !== undefined) {
            number2.push(num.textContent);
            let fullNumber = number2.join('');
            display.textContent = fullNumber;
            num2 = parseInt(display.textContent);
        } else {
            number1.push(num.textContent);
            let fullNumber = number1.join('');
            display.textContent = fullNumber;
            num1 = parseInt(display.textContent);
        }
    });
  });


  operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (operatorCount === 0) {
            operatorCount++;
            display.textContent = operation.textContent;
            return operator = display.textContent;
        } else {
            operate(num1, num2, operator);
            operatorCount = 1;
            num1 = result;
            num2 = 0;
            number1 = [];
            number2 = [];
            display.textContent = result;
            operator = operation.textContent;
        }
    })
  }) 

equals.addEventListener('click', () => {
    operate(num1, num2, operator);
    num1 = result;
    num2 = 0;
    number1 = [];
    number2 = [];
    operator = undefined;
    display.textContent = result;
});

clear.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    number1 = [];
    number2 = [];
    operator = undefined;
    result = 0;
    display.textContent = result;
})
