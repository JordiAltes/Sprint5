"use strict";
const API_URL = "https://icanhazdadjoke.com/";
let HTMLResponse = document.querySelector("#joke");
let joke;
function nextJoke() {
    const scoreButton = document.getElementById("scoreButtons");
    scoreButton.style.display = "";
    fetch(`${API_URL}/`, { headers: { Accept: "application/json" } })
        .then((response) => response.json())
        .then((data) => {
        joke = data.joke;
        console.log(joke);
        HTMLResponse.innerHTML = joke;
    });
}
const arrayJokes = [];
function scoreJoke(id) {
    const scoreJoke = id;
    const date = new Date();
    const dateToString = date.toISOString();
    const objectJoke = { joke: joke, date: dateToString, score: scoreJoke };
    console.log(objectJoke);
    arrayJokes.push(objectJoke);
    console.log(arrayJokes);
}
