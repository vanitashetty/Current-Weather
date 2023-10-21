document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search");
    const cityInput = document.getElementById("city");
    const resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        const city = cityInput.value;
        if (city === "") {
            alert("Please enter a city name.");
            return;
        }

        // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const apiKey = "02eccbfbf91e8192ddfbb090745c582e";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    resultDiv.innerHTML = `Weather in ${city}: ${temperature}°C, ${description}`;
                } else {
                    resultDiv.innerHTML = `City not found.`;
                }
            })
            .catch((error) => {
                console.error(error);
                resultDiv.innerHTML = `An error occurred.`;
            });
    });
});
