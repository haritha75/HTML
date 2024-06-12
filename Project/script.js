const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      if (data.Response === "True") {
        // Check if the response is successful
        main.innerHTML = ""; // Clear previous results
        data.Search.forEach((element) => {
          const div_card = document.createElement("div");
          div_card.setAttribute("class", "card");

          const image = document.createElement("img");
          image.setAttribute("class", "thumbnail");
          image.src = element.Poster;

          const title = document.createElement("h3");
          title.textContent = element.Title;

          div_card.appendChild(image);
          div_card.appendChild(title);
          main.appendChild(div_card);
        });
      } else {
        main.innerHTML = "<p>No results found</p>"; // Display message for no results
      }
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      main.innerHTML = "<p>Failed to fetch movies</p>"; // Display message for fetch error
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchItem = search.value.trim(); // Trim whitespace
  if (searchItem) {
    returnMovies(`http://www.omdbapi.com/?s=${searchItem}&apikey=94c5a254`); // Replace YOUR_API_KEY with your actual API key
    search.value = "";
  }
});
