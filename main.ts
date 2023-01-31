const API_URL = 'https://icanhazdadjoke.com/';

let HTMLResponse:any = document.querySelector('#joke');

function nextJoke() {
  fetch(`${API_URL}/`, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => {
      const joke:string = data.joke;
      console.log(joke);
      HTMLResponse.innerHTML = joke;
      
});
}

