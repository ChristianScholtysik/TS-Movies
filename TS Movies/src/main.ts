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
//?eigentliche Logik entwickeln
//? 6. CSS
//? 7. Ausgiebig testen
//? 8. Bonus?

const searchButton = document.getElementById("searchButton");
const addButton = document.getElementById("addButton");
const inputField = document.getElementById("searchInput") as HTMLInputElement;
const titleInput = document.getElementById("titleInput") as HTMLInputElement;
const yearInput = document.getElementById("yearInput") as HTMLInputElement;
const durationInput = document.getElementById(
  "durationInput"
) as HTMLInputElement;
const directorInput = document.getElementById(
  "directorInput"
) as HTMLInputElement;
const genreInput = document.getElementById("genreInput") as HTMLInputElement;
const ratingInput = document.getElementById("ratingInput") as HTMLInputElement;
const yearUpButton = document.getElementById(
  "yearUpButton"
) as HTMLInputElement;
const yearDownButton = document.getElementById("yearDownButton");
const bestRateButton = document.getElementById("bestRateButton");
const resultSection = document.getElementById("resultSection");

//! Array to LowerCase

//* Ergebnis der Suche wird auf einem Card Element angezeigt
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

//* Wenn kein Ergebnis gefunden wurde wird ein Card Element 'Not found' angezeigt
function noResultCard() {
  if (resultSection) {
    const card = document.createElement("div");
    card.className = "movieCard";
    const headlineElement = document.createElement("h2");
    headlineElement.innerText = "Not Found";
    card.appendChild(headlineElement);
    resultSection.appendChild(card);
  }
}

//*Search Funktionalität onClick()
function search(event: Event) {
  event.preventDefault();
  let userInput = inputField;
  if (!userInput) {
    console.log("Du hast keine Suche eingegeben.");
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
    //*wenn ergebnis gefunden dann gib resultCard aus
    if (resultSection) {
      resultCard(result);
    }

    //* No Result
    //*Wenn array leer dann gib noResultCard aus
    if (result.length === 0 && resultSection) {
      noResultCard();
    }
  }
}
//* Sortierung YearUp
function yearUpClick(event: Event) {
  event.preventDefault();
  console.log("YearUp");
  if (resultSection) {
    let sortedUpArray = [];
    sortedUpArray = movies.sort((a: any, b: any) => a[1] - b[1]);
    console.log({ sortedUpArray });
    resultCard(sortedUpArray);
  }
}
//*Sortierung YearDown
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

//* Sortierung BestRate
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

//* Add Movie To List
//* Neuen Film hinzufügen
function add(event: Event) {
  event.preventDefault();
  let title = titleInput.value;
  let year = yearInput.value;
  let duration = durationInput.value;
  let director = directorInput.value;
  let genre = genreInput.value;
  let rating = ratingInput.value;
  let movie = [title, year, duration, director, genre, rating];

  movies.push(movie);
  console.log("Added movie:", movie);
}

//*  EventListener definieren
if (searchButton) {
  searchButton.addEventListener("click", search);
}

if (addButton) {
  addButton.addEventListener("click", add);
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
