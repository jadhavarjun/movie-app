const api = "https://www.omdbapi.com/?apikey=ced7ed6e&t=";
let notFound = document.getElementById("notFound");
let found = document.getElementById("found");

function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;
  console.log(query);
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Error) {
        notFound.classList.remove("d-none");
        found.classList.add("d-none");
        // notFound.classList.add("d-none");
        document.getElementById("name").innerText = movieName.value;
      } else {
        notFound.classList.add("d-none");
        found.classList.remove("d-none");
        document.getElementById("title").innerText = data.Title;
        document.getElementById("poster").src = data.Poster;
        document.getElementById("genre").innerText = data.Genre;
        document.getElementById("date").innerText = data.Released;
        document.getElementById("actors").innerText = data.Actors;
        document.getElementById("collection").innerText = data.BoxOffice;
        document.getElementById("awards").innerText = data.Awards;
        document.getElementById("director").innerText = data.Director;
        document.getElementById("writer").innerText = data.Writer;
        document.getElementById("ratings").innerText = data.imdbRating;
        document.getElementById("desc").innerText = data.Plot;
      }
    });
}
