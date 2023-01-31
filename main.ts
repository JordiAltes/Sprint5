const API_URL = "https://icanhazdadjoke.com/";

let HTMLResponse: any = document.querySelector("#joke");
let joke: string;

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
interface Joke {
  joke: string;
  date: string;
  score: number;
}

const arrayJokes: Joke[] = [];
let objectJoke = { joke: "", date: "", score: 0 };
function scoreJoke(id: number) {
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
