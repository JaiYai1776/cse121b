/* LESSON 3 - Programming Tasks */

/* Profile Object  */
// Declare a new object literal variable named myProfile
let myProfile = {};

// Add properties to myProfile
myProfile.name = "JeanAlbert Arnold";  
myProfile.photo = "images/self.jpg";  
myProfile.favoriteFoods = ["Pizza", "Pancakes", "Omelettes" , "Nachos", "Lasagna"];  
myProfile.hobbies = ["Philosophy", "Reading", "Puzzles"]; 
myProfile.placesLived = [];
 
/* Populate Profile Object with placesLive objects */

let firstPlace = {
    place: "Tacoma, WA",
    length: "5 years"
  };
  myProfile.placesLived.push(firstPlace);
  
  
  myProfile.placesLived.push({
    place: "Springfield, MA",
    length: "3 years"
  });
  
  myProfile.placesLived.push({
    place: "Laurel, MS",
    length: "13 years"
  });

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  let listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
  let listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
let placesLivedDL = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  let dtElement = document.createElement("dt");
  dtElement.textContent = place.place;

  let ddElement = document.createElement("dd");
  ddElement.textContent = place.length;

  placesLivedDL.appendChild(dtElement);
  placesLivedDL.appendChild(ddElement);
});

