const getCity = () => {
    const inputCity = document.getElementById('input-city').value;

    if (inputCity == '') {
        alert('Input your city name')
    } else {
        getWeather(inputCity);
    }
    
    document.getElementById("input-city").value='';
}

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62bf16fa111bda17a889ef15caef9678`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}
const temperatureConverter = (temp) => {
    const newTemp = parseFloat(temp - 273.15).toFixed(2);
    return newTemp;
}
const displayData = data => {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById("temperature").innerText = temperatureConverter(data.main.temp);
    document.getElementById('weather').innerText = data.weather[0].main;
}