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

        // Arrays for different weather conditions
        const clearSkyConditions = ["clear sky"];
        const cloudyConditions = ["broken clouds", "few clouds", "scattered clouds", "overcast clouds"];
        const rainyConditions = ["light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"];
        const snowyConditions = ["light snow", "snow", "heavy snow", "sleet", "shower snow"];
        const mistyConditions = ["mist", "fog", "smoke", "haze", "sand, dust whirls", "dust", "volcanic ash", "squalls", "tornado"];
        const thunderstormConditions = ["thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"];
        const drizzleConditions = ["light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle"];

        let conditionMessage = "";

        // Check the weather condition and set the message accordingly
        if (clearSkyConditions.includes(description)) {
            conditionMessage = `Expect clear sky in ${name}`;
        } else if (cloudyConditions.includes(description)) {
            conditionMessage = `Expect cloudy sky in ${name}`;
        } else if (rainyConditions.includes(description)) {
            conditionMessage = `Expect rainy weather in ${name}`;
        } else if (snowyConditions.includes(description)) {
            conditionMessage = `Expect snowy weather in ${name}`;
        } else if (mistyConditions.includes(description)) {
            conditionMessage = `Expect misty weather in ${name}`;
        } else if (thunderstormConditions.includes(description)) {
            conditionMessage = `Expect misty weather in ${name}`;
        } else if (drizzleConditions.includes(description)) {
            conditionMessage = `Expect misty weather in ${name}`;
        } else {
            conditionMessage = `Weather condition "${description}" not handled`;
        }

        // Display the weather condition message
        document.querySelector(".weather-condition").innerText = conditionMessage;
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
