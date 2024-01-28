/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
 subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
 const multiply = (factor1, factor2) => factor1 * factor2;


 const multiplyNumbers = () => {
     const factor1 = Number(document.querySelector('#factor1').value);
     const factor2 = Number(document.querySelector('#factor2').value);
     document.querySelector('#product').value = multiply(factor1, factor2);
 };

 document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;


const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
// Check for zero divisor
    if (divisor !== 0) {
        document.querySelector('#quotient').value = divide(dividend, divisor);
    } else {
        alert("Cannot divide by zero. Please enter a non-zero divisor.");
    }
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
