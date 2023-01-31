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
