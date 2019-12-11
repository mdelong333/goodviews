var favorite;

// displayMovieInfo function re-renders the HTML to display the appropriate content
$("#add-movie").on("click", function(event) {
  event.preventDefault();

  var movie = $("#movie-input")
    .val()
    .trim();

  if (
    !$("#movie-input")
      .val()
      .trim()
  ) {
    alert("Enter a movie to search");
  } else {
    displayMovieInfo(movie);
  }
});

function displayMovieInfo(movie) {
  // var OMDB_KEY = keys.omdb;
  var OMDB_KEY = "trilogy";
  // var OMDB_KEY = env.OMDB_KEY;
  var queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=${OMDB_KEY}`;

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    movieData = {
      poster: response.Poster,
      title: response.Title,
      summary: response.Plot,
      rating: response.Rated,
      year: response.Year
    };

    $(".card").css({
      "background-image": `url(${movieData.poster})`
    });
    $("#modal-title").html(`${movieData.title}`);
    $("#modal-year").html(`${movieData.year}`);
    $("#modal-rating").html(`Rated: ${movieData.rating}`);
    $("#modal-summary").html(`${movieData.summary}`);

    // Add To Favorites
    favorite = $("#favorite");

    $(favorite).html("favorite_border");

    $(favorite).click(function() {
      if ($(this).html("favorite")) {
        $(this).html("favorite_border");
      } else if ($(this).html("favorite_border")) {
        $(this).html("favorite");
      } else {
        $(favorite).html("favorite_border");
      }
    });
  });
}
