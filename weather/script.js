const weather = {
    apiKey: "292a6ab1978d9b7e550d14dd23ab0f61", // API key for accessing weather data
    
    // Function to fetch weather data based on the provided city
    fetchWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`)
            .then(response => response.json()) // Parse response as JSON
            .then(data => this.displayWeather(data)); // Call displayWeather with fetched data
    },
    
    // Function to display weather data on the webpage
    displayWeather(data) {
        // Extract relevant weather information from the data object
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        // Log weather information to console (Testing purposes only)
        // console.log(name, icon, description, temp, humidity, speed);
        
        // Update HTML elements with weather information
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp}°F`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed} mph`;
        document.querySelector(".weather").classList.remove("loading");
        
        // Set background image of the body based on the city name
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    },
    
    // Function to initiate a weather search based on user input
    search() {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

// Event listener for the search button click
document.querySelector(".search button").addEventListener("click", () => {
    weather.search(); // Call search function when button is clicked
});

// Event listener for keyboard input in the search bar
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        weather.search(); // Call search function when "Enter" key is pressed
    }
});

weather.fetchWeather("Seattle"); // Initial weather fetch for Seattle
