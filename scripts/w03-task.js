/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers(e){
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const num1 = Number(inputs.add1.value);
    const num2 = Number(inputs.add2.value);
    inputs.sum.value = add(num1, num2);
}
document.querySelector('#additionForm').addEventListener('submit', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const num1 = Number(document.querySelector('#subtract1').value);
    const num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1, num2);
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


function calculateTotal(e) {
    e.preventDefault();
    const inputs= e.currentTarget.elements;
    // Get the numeric value entered by the user in the subtotal field
    
    const subtotal = parseFloat(inputs.subtotal.value);

    // Check if the membership checkbox has been checked
    const applyDiscount = inputs.member.checked;

    // Apply a 20% discount if the membership checkbox is checked
    const discountMultiplier = applyDiscount ? 0.8 : 1;

    // Calculate the total with the discount
    const total = (subtotal * discountMultiplier).toFixed(2);

    // Output the total to the total span with two decimals using a template string
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `$ ${total}`;
}
document.querySelector('#selectionForm').addEventListener('submit', calculateTotal);

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Odds Only Array */
    document.getElementById('array').textContent = 'Array: ' + numbersArray.join(', ');

        // Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of odds
        const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
    document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0)


/* Output Evens Only Array */
    document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0)

/* Output Sum of Org. Array */
    const sum = numbersArray.reduce((sum, number) => sum + number, 0);
    document.querySelector('#sumOfArray').textContent = sum;
/* Output Multiplied by 2 Array */
   const mult = numbersArray.map(number => number * 2);
    document.querySelector('#multiplied').textContent = mult;
/* Output Sum of Multiplied by 2 Array */
    const sumOfMultiplied = mult.reduce((sum, number) => sum + number, 0);
    document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
