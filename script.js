const apiKey = 'c4586307cbf9788ac5bd1f6e5735e4f1'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const icon = data.weather[0].icon;
            const weatherCondition = data.weather[0].main;
            
            // Update the weather details
            document.getElementById('cityName').innerText = cityName;
            document.getElementById('temperature').innerText = `${temperature}°C`;
            document.getElementById('condition').innerText = condition;
            document.getElementById('weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;

            // Display current time
            const currentTime = new Date().toLocaleString();
            document.getElementById('currentTime').innerText = `Current time: ${currentTime}`;

            // Change background color based on weather condition
            changeBackgroundColor(weatherCondition);
        })
        .catch(error => {
            alert("City not found. Please try again.");
        });
}

function changeBackgroundColor(weatherCondition) {
    let backgroundColor = '';

    if (weatherCondition === 'Clear') {
        backgroundColor = '#87CEEB'; // Sky Blue
    } else if (weatherCondition === 'Clouds') {
        backgroundColor = '#B0C4DE'; // Light Steel Blue
    } else if (weatherCondition === 'Rain') {
        backgroundColor = '#708090'; // Slate Gray
    } else if (weatherCondition === 'Snow') {
        backgroundColor = '#F0F8FF'; // Alice Blue
    } else {
        backgroundColor = '#f0f0f0'; // Default background
    }

    document.body.style.backgroundColor = backgroundColor;
}