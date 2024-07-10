
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'd4ac8161e79bb227a4a63c0ab2edea76'; // Replace with your OpenWeatherMap API key
    const city = 'Lucknow'; // Replace with the desired city

    function fetchWeather() {
        fetch(https  //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    }

    function displayWeather(data) {
        const weatherContainer = document.getElementById('weather');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const city = data.name;

        weatherContainer.innerHTML = `
            <p>City: ${city}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${description}</p>
        `;
    }

    fetchWeather();
});