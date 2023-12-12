const api = "https://www.omdbapi.com/?apikey=ced7ed6e&t=";

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
        // notFound.classList.add("d-none");
        document.getElementById("name").innerText = movieName.value;
      } else {
        notFound.classList.add("d-none");
      }
    });
}
