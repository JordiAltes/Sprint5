const API_URL = "https://icanhazdadjoke.com/";

let HTMLResponse: any = document.querySelector("#joke");
let joke:string;
 function nextJoke() {
 
  const scoreButton = document.getElementById(
    "scoreButtons"
  ) as HTMLButtonElement;

  scoreButton.style.display = "";

   fetch(`${API_URL}/`, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => {
      joke = data.joke;
      console.log(joke);
      HTMLResponse.innerHTML = joke;
    });
}
const arrayJokes:any = []
function scoreJoke(id:number) {
  const scoreJoke = id;
  const date = new Date();
  const dateToString = date.toISOString();
  const objectJoke = {joke: joke, date: dateToString, score: scoreJoke}
  console.log(objectJoke);
  arrayJokes.push(objectJoke)
  console.log(arrayJokes);
}
