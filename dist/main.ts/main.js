"use strict";
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Haciendo una solicitud a OpenWeatherMap API para obtener el tiempo
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=665f830363c93f4634ee3058d048bc8f
      `)
            .then((response) => response.json())
            .then((data) => {
            const weather = data.weather;
            const weatherDescription = weather[0].description;
            const temperature = Math.round(data.main.temp);
            const celsiusTemperature = (temperature - 273.15).toFixed(0);
            console.log(data);
            console.log(weatherDescription);
            console.log(temperature);
            document.getElementById("showWeather").innerHTML = `Today: ${weatherDescription} and ${celsiusTemperature}ºC`;
        });
    });
}
const API_URL = "https://icanhazdadjoke.com/";
const API_URL2 = "https://api.chucknorris.io/jokes/random";
const header = { headers: { Accept: "application/json" } };
let HTMLResponse = document.querySelector("#joke");
let joke;
let joke2;
function nextJoke() {
    const scoreButton = document.getElementById("scoreButtons");
    scoreButton.style.display = "";
    let randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
        fetch(API_URL, header)
            .then((response) => response.json())
            .then((data) => {
            joke = data.joke;
            console.log(joke);
            HTMLResponse.innerHTML = joke;
        });
    }
    if (randomNumber === 1) {
        fetch(API_URL2, header)
            .then((response) => response.json())
            .then((data) => {
            joke2 = data.value;
            console.log(joke2);
            HTMLResponse.innerHTML = joke2;
        });
    }
}
const arrayJokes = [];
let objectJoke = { joke: "", date: "", score: 0 };
function scoreJoke(id) {
    const scoreJoke = id;
    const date = new Date();
    const dateToString = date.toISOString();
    const existJoke = arrayJokes.find((x) => x.joke === joke);
    if (!existJoke) {
        objectJoke = { joke: joke, date: dateToString, score: scoreJoke };
        arrayJokes.push(objectJoke);
    }
    if (existJoke) {
        objectJoke.score = scoreJoke;
    }
    console.log(objectJoke);
    console.log(arrayJokes);
}
