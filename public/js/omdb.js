var favorite;
var favorites;

// displayMovieInfo function re-renders the HTML to display the appropriate content
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  console.log("click");

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
    // console.log(response);

    movieData = {
      poster: response.Poster,
      title: response.Title,
      summary: response.Plot,
      rating: response.Rated,
      year: response.Year,
      favorite: false
    };
    // console.log(movieData.id);

    // $(".searched").append(`
    // <div class="movie-searched">
    // <img src="${movieData.poster}" alt="Poster for ${movieData.title}">
    // <h4>${movieData.title}</h4>
    // <h5>${movieData.year}</h5>
    // <h5>${movieData.rating}</h5>
    // <h5>${movieData.summary}</h5>
    // <button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
    // </div>
    // `);

    // Display on Modal
    // FIXME Will not display image

    $("#modal-image").html(
      `<img src="${movieData.poster}" alt="Poster for ${movieData.title}">`
    );
    $("#modal-title").html(`${movieData.title}`);
    $("#modal-year").html(`${movieData.year}`);
    $("#modal-rating").html(`Rated: ${movieData.rating}`);
    $("#modal-summary").html(`${movieData.summary}`);

    // Add To Favorites Button
    favorite = $("#favorite");

    // Add Button to Modal
    $(favorite).html("favorite_border");

    // Clicking on "favorite" heart icon
    $(favorite).off().on("click", function(event) {
      event.preventDefault();
      // When unfavorited heart is clicked then...
      // display full heart and add movie to database as well as my title page
      if ($(this).html() === "favorite_border") {
        $(this).html("favorite");
        movieData.favorite = true;
        // TODO add movie to database
        console.log(movieData.title + " added to favorites");
        insertFavorite();
        
      }

      // If favorited is clicked then...
      // display empty heart and remove movie from database as well as my titles page
      else if ($(this).html() == "favorite") {
        $(this).html("favorite_border");
        movieData.favorite = false;
        // TODO remove movie to database
        console.log(movieData.title + " removed from favorites");
        deleteFavorite();
      }
    });
  });
}

// This function grabs favorite from the database and updates the view
// function getFavorites() {
//   $.get("/api/favorite", function(data) {
//     movieData = data;
//   });
// }

// add to database
function insertFavorite(event) {
  var favorite = {
    title: movieData.title,
    poster: movieData.poster,
    summary: movieData.summary,
    rating: movieData.rating,
    year: movieData.year,
    favorite: true,
  };
  console.log(favorite);

  $.post("/api/favorites", favorite, getFavorites);
}

function deleteFavorite(event) {
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/favorites" + id
  })
}

function getFavorites() {
  $.get("/api/favorites", function(data) {
    console.log("Favorites", data);
    favorites = data;
    console.log(favorites)
    if (!favorites || !favorites.length) {
      displayEmpty();
    } else {
      displayFavorites();
    }
  });
}

function displayEmpty() {
  $(".faves").empty();
  var messageH4 = $("<h4 class='white-text'>");
  messageH4.css({ "text-align": "center", "margin-top": "50px" });
  messageH4.html("No favorites yet :( navigate <a href='/browse'>here</a> to search your faves!");
  $(".faves").append(messageH4);
};

function displayFavorites() {
  $(".faves").empty();
  var favesToAdd = [];
  for (var i =0; i < favorites.length; i++) {
    favesToAdd.push($(".faves").append(`
    <div class="favorited-movie">
    <img src="${favorites[i].poster}" alt="Poster for ${favorites[i].title}">
    <h5 class="white-text">${favorites[i].title}</h5>
    <p class="white-text">${favorites[i].year}</p>
    <p class="white-text">${favorites[i].rating}</p>
    <p class="white-text">${favorites[i].summary}</p>
    </div>
    <hr>
    `))
  }
  $(".faves").append(favesToAdd);
}

// function getFavorites(id) {
//   $.get("/api/favorites", function(data) {
//     favorites = data;
//     console.log(favorites);
//   });
// };

// //add to database
// function updateFavorite(imdbID) {

//   $.post("/api/favorites:" + imdbID, function(data) {
//     return data;
//   })

// };

// function addToFavePage(res, err) {

//   // console.log(movieData);
//   // $(".faves").html(`
//   //   <div class="movie-searched">
//   //   <img src="${movieData.poster}" alt="Poster for ${movieData.title}">
//   //   <h4>${movieData.title}</h4>
//   //   <h5>${movieData.year}</h5>
//   //   <h5>${movieData.rating}</h5>
//   //   <h5>${movieData.summary}</h5>
//   //   </div>
//   //   `);
//   //   if (err) {
//   //     console.log(err);
//   //   }
// }

