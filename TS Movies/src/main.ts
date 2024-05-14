import { movies } from "./array";

// Vorgehensweise

// ?1. Aufgabenstellung verstehen
// ?2. Plan machen: Schritt 1 - x
// ?3. Neues Vite-Projekt anlegen: npm create vite@latest
// ?4. HTML
// ?5. TypeScript
// ?  - alle relevanten Elemente holen
// ?    - EventListener definieren
// ?  - mit console.log testen, ob alle Klicks funktionieren
//    - eigentliche Logik entwickeln
// 6. CSS
// 7. Ausgiebig testen
// 8. Bonus?

const searchButton = document.getElementById("searchButton");
const inputField = document.getElementById("searchInput") as HTMLInputElement;
const yearUpButton = document.getElementById("yearUpButton");
const yearDownButton = document.getElementById("yearDownButton");
const bestRateButton = document.getElementById("bestRateButton");
const resultSection = document.getElementById("resultSection");

//? Array to LowerCase
//?

// function processArray(array: any[]): [string, string, string] {
//   const firstThreeLowercase = array
//     .slice(0, 4)
//     .map((item) => item.toLowerCase());
//   return [
//     firstThreeLowercase[0],
//     firstThreeLowercase[1],
//     firstThreeLowercase[2],
//   ];
// }

// Durch jedes Array in movies iterieren und die Funktion anwenden
// const modifiedMovies = movies.map(processArray);
// console.log(modifiedMovies);

//?

function resultCard(
  movieList: [string, string, string, string, string[], string][]
) {
  if (resultSection) {
    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movieCard";
      const headlineElement = document.createElement("h2");
      headlineElement.innerText = movie[0];
      card.appendChild(headlineElement);
      const yearElement = document.createElement("p");
      yearElement.innerText = movie[1];
      card.appendChild(yearElement);
      const directorElement = document.createElement("h3");
      directorElement.innerText = movie[2];
      card.appendChild(directorElement);
      const durationElement = document.createElement("p");
      durationElement.innerText = movie[3];
      card.appendChild(durationElement);
      //    const genreElement = document.createElement("p");
      //  genreElement.innerText = movie[4.0];
      //   genreElement.innerText = movie[4.1];
      //    resultSection.appendChild(genreElement[]);
      const ratingElement = document.createElement("p");
      ratingElement.innerText = movie[5];
      card.appendChild(ratingElement);
      resultSection.appendChild(card);
    });
  }
}

//? Funktionalität onClick()
function search(event: Event) {
  event.preventDefault();
  let userInput = inputField;
  if (!userInput) {
    console.log("Du hast keine Tasks eingegeben.");
  }
  // const searchInput = inputField.value.toString().toLowerCase();
  const searchInput = inputField.value.toString();
  console.log(searchInput);

  if (searchInput) {
    const result = movies.filter(
      (movie) =>
        movie[0].includes(searchInput) ||
        movie[1].includes(searchInput) ||
        movie[2].includes(searchInput)
    );
    console.log(result);
    if (resultSection) {
      resultCard(result);
    }
  }
}

function yearUpClick(event: Event) {
  event.preventDefault();
  console.log("YearUp");
  if (resultSection) {
    // resultSection.innerHTML = "";
    let sortedUpArray = [];
    sortedUpArray = movies.sort((a: any, b: any) => a[1] - b[1]);
    console.log({ sortedUpArray });
    resultCard(sortedUpArray);
  }
}

function yearDownClick(event: Event) {
  event.preventDefault();
  console.log("YearDown");
  if (resultSection) {
    let sortedDownArray = [];
    sortedDownArray = movies.sort((a: any, b: any) => b[1] - a[1]);
    console.log({ sortedDownArray });
    resultCard(sortedDownArray);
  }
}
function bestRateClick(event: Event) {
  event.preventDefault();
  console.log("BestRate");
  if (resultSection) {
    let bestRateArray = [];
    bestRateArray = movies.sort((a: any, b: any) => b[5] - a[5]);
    console.log({ bestRateArray });
    resultCard(bestRateArray);
  }
}

//?  EventListener definieren
if (searchButton) {
  searchButton.addEventListener("click", search);
}

if (yearUpButton) {
  yearUpButton.addEventListener("click", yearUpClick);
}

if (yearDownButton) {
  yearDownButton.addEventListener("click", yearDownClick);
}

if (bestRateButton) {
  bestRateButton.addEventListener("click", bestRateClick);
}
