"use strict";
const API_URL = 'https://icanhazdadjoke.com';
let HTMLResponse = document.querySelector('result');
fetch(`${API_URL}/`).then((response) => response.json()).then((data) => {
    const joke = data.joke;
    console.log(joke);
});
