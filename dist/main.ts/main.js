"use strict";
const API_URL = 'https://icanhazdadjoke.com/';
let HTMLResponse = document.querySelector('.result');
function nextJoke() {
    fetch(`${API_URL}/`, { headers: { Accept: 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
        const joke = data.joke;
        console.log(joke);
        HTMLResponse.innerHTML = joke;
    });
}
