document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('temperatureForm').addEventListener('submit', function(e) {
        e.preventDefault();
        convertTemperature();
    });
    document.getElementById('themeButton').addEventListener('click', changeTheme);
});

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;

    let celsius, fahrenheit, kelvin;

    if (unit === 'Celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'Fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === 'Kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
    }

    document.getElementById('celsiusOutput').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitOutput').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinOutput').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;

    document.getElementById('result').style.display = 'block';
}

function changeTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    const container = document.querySelector('.container');
    container.classList.toggle('dark-theme');
    container.classList.toggle('light-theme');
    const button = document.querySelector('button[type="submit"]');
    button.classList.toggle('dark-theme');
    button.classList.toggle('light-theme');
    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark-theme');
    themeButton.classList.toggle('light-theme');
}
