let num1;
let num2;
let operator;
let result;
let num3;

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
            return result = add(num1, num2);
            break;
        case "-":
            return result = subtract(num1, num2);
            break;
        case "*":
            return result = multiply(num1, num2);
            break;
        case "/":
            return result = divide(num1, num2);
            break;
    }
}

const number = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");

//Event listener
number.forEach((num) => {
    num.addEventListener('click', () => {
        if (operator !== undefined) {
            display.textContent = num.textContent;
            return num2 = parseInt(display.textContent);
        } else {
            display.textContent = num.textContent;
            return num1 = parseInt(display.textContent);
        }
    });
  });

  operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        display.textContent = operation.textContent;
        return operator = display.textContent;
    })
  }) 

equals.addEventListener('click', () => {
    operate(num1, num2, operator);
    display.textContent = result;
});



