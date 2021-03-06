var favorite;
var favorites;

// displayMovieInfo function re-renders the HTML to display the appropriate content
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // console.log("click");

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

  $("#movie-form").trigger('reset');
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
        // movieData.favorite = true;
        // TODO add movie to database
        console.log(movieData.title + " added to favorites");
        insertFavorite();
        
      }

      // If favorited is clicked then...
      // display empty heart and remove movie from database as well as my titles page
      else if ($(this).html() === "favorite") {
        $(this).html("favorite_border");
        // movieData.favorite = false;
        // TODO remove movie to database
        console.log(movieData.title + " removed from favorites");
        // updateFavorite();
      }
    });
  });
}

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
};

// function updateFavorite(favorite) {
//   $.ajax({
//     method: "PUT",
//     url: "/api/favorites/" + id,
//     data: favoriteMovie
//   }).then(function(data){
//     console.log(data);
//   });
// };

function getFavorites() {
  $.get("/api/favorites", function(data) {
    
    favorites = data;
    // console.log(favorites)
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

//WORKS 
// function displayFavorites() {
//   $(".faves").empty();
//   var favesToAdd = [];
//   for (var i =0; i < favorites.length; i++) {
//     favesToAdd.push($(".faves").append(`
//     <div class="favorited-movie">
//     <img src="${favorites[i].poster}" alt="Poster for ${favorites[i].title}">
//     <h5 class="white-text">${favorites[i].title}</h5>
//     <p class="white-text">${favorites[i].year}</p>
//     <p class="white-text">${favorites[i].rating}</p>
//     <p class="white-text">${favorites[i].summary}</p>
//     </div>
//     <hr>
//     `))
//   }
//   $(".faves").append(favesToAdd);
// }

//CAROUSEL WORKING ON MYTITLES PAGE
function displayFavorites() {
  $(".faves").empty();
  var favesToAdd = [];
  for (var i =0; i < favorites.length; i++) {
    
    favesToAdd.push($(".favorites-carousel").append(`
    <div data-favorites="${favorites[i].id}">
    <a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
    <img src="${favorites[i].poster}" alt="${favorites[i].title}">
    </a>
    </div>
    `))
  }
  $(".favorites-carousel").append(favesToAdd);

  initCarousel();
};

function initCarousel() {
  $('.favorites-carousel').carousel({
      duration: 200,
      fullWidth: false
  });

  setInterval(function() {
    $('.favorites-carousel').carousel('next');
  }, 2000); // every 2 seconds

  // Init Slider
  $('.slider').slider();
};