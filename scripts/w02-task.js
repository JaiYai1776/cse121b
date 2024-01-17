/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "JeanAblbert Arnold";
const currentYear = new Date().getFullYear();
const profilePicture = "images/self.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}.  He is an online student at BYU-Idaho`);

/* Step 5 - Array */
let favFoods = ["Pizza", "Tacos", "Sushi", "Pasta", "Burgers"];
foodElement.textContent = favFoods.join(', '); //This works, but is it correct?
let newFavFood = "Ramen";
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;


