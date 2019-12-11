// Initial array of movies
// var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
<<<<<<< HEAD
function displayMovieInfo() {
  var movie = $(this).attr("data-name");
=======
$("#add-movie").on("click", function(event) {
  event.preventDefault();

  var movie = $("#movie-input").val().trim();

  if (!$("#movie-input").val().trim()) {
    alert("Enter a movie to search");
  } else {
    displayMovieInfo(movie)
  }
})

function displayMovieInfo(movie) {
>>>>>>> 197c6640481a9490f86cc5d96ef446abfd693d1d
  // var OMDB_KEY = keys.omdb;
  var OMDB_KEY = "trilogy";
  // var OMDB_KEY = env.OMDB_KEY;
  var queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=${OMDB_KEY}`

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  
    console.log(response);
    console.log(response.Title)
    console.log(response.Poster);
    movieData = {
      poster: response.Poster,
      title: response.Title,
      summary: response.Plot,
      rating: response.Rated,
      year: response.Year
    }

    $(".searched").append(`<div class="search-display">
    <img src="${movieData.poster}" class="poster">
    <h3>${movieData.title}</h3>
    <h5>${movieData.summary}</h5>
    <h5>${movieData.rating}</h5>
    <h5>${movieData.year}</h5>
    </div>`)

  });
}
