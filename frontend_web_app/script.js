// const main = document.getElementById("section");
// const form = document.getElementById("form");
// const search = document.getElementById("query");

// function returnMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then(function (data) {
//       if (data.Response === "True") {
//         // Check if the response is successful
//         main.innerHTML = ""; // Clear previous results
//         data.Search.forEach((element) => {
//           const div_card = document.createElement("div");
//           div_card.setAttribute("class", "card");

//           const image = document.createElement("img");
//           image.setAttribute("class", "thumbnail");
//           image.src = element.Poster;

//           const title = document.createElement("h3");
//           title.textContent = element.Title;

//           div_card.appendChild(image);
//           div_card.appendChild(title);
//           main.appendChild(div_card);
//         });
//       } else {
//         main.innerHTML = "<p>No results found</p>"; // Display message for no results
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching movies:", error);
//       main.innerHTML = "<p>Failed to fetch movies</p>"; // Display message for fetch error
//     });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchItem = search.value.trim(); // Trim whitespace
//   if (searchItem) {
//     returnMovies(`http://www.omdbapi.com/?s=${searchItem}&apikey=94c5a254`); // Replace YOUR_API_KEY with your actual API key
//     search.value = "";
//   }
// });

const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f48a026f1a43a1c189b9e0c0f4cf0492&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=f48a026f1a43a1c189b9e0c0f4cf0492&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_card = document.createElement("div");
        div_card.className = "card";
        const div_row = document.createElement("div");
        div_row.className = "row";
        const div_column = document.createElement("div");
        div_column.className = "column";
        const image = document.createElement("img");
        image.className = "thumbnail";
        const title = document.createElement("h3");

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;

        div_card.appendChild(title);
        div_card.appendChild(image);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    })
    .catch((error) => console.error("Error fetching movies:", error));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});

returnMovies(APILINK);
