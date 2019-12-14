$(document).ready(function() {
  newReleaseCarousel();
  dramaCarousel();
  horrorCarousel();
  actionCarousel();
  comedyCarousel();

  function newReleaseCarousel() {
    var tmdb = "d9c79423643387f61ce269ad956c670a";
    //var to get current year to be used in api query to return new releases on home page
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var newRelease = currentYear - 1;
    // console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${newRelease}`;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      // console.log(response.results);

      for (var r = 0; r < 10; r++) {
        var movieData = {
          title: results[r].title,
          image: `https://image.tmdb.org/t/p/w780${results[r].poster_path}`,
          popularity: results[r].popularity,
          genreID: results[r].genre_ids,
          avgRating: results[r].vote_average,
          summary: results[r].overview,
          release: results[r].release_date,
          favorite: false
        };
        // console.log(movieData);

        // API to Carousel View
        $(".new-release")
          .append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}" onclick="showInfo(this)" data-target="modal1">
                </a>
                `);
      }

      initNewRelease();
      // favorite();
    });
  }

  function dramaCarousel() {
    var tmdb = "d9c79423643387f61ce269ad956c670a";
    //var to get current year to be used in api query to return new releases on home page
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var newRelease = currentYear - 1;
    // console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      // console.log(response.results);

      for (var r = 0; r < 20; r++) {
        var movieData = {
          title: results[r].title,
          image: `https://image.tmdb.org/t/p/w780${results[r].poster_path}`,
          popularity: results[r].popularity,
          genreID: results[r].genre_ids,
          avgRating: results[r].vote_average,
          summary: results[r].overview,
          release: results[r].release_date,
          favorite: false
        };
        // console.log(movieData);

        $(".drama-carousel")
          .append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}" onclick="showInfo(this)" data-target="modal1">
                </a>`);
      }

      initCarousel();
    });
  }

  function horrorCarousel() {
    var tmdb = "d9c79423643387f61ce269ad956c670a";
    //var to get current year to be used in api query to return new releases on home page
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var newRelease = currentYear - 1;
    // console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      // console.log(response.results);

      for (var r = 0; r < 20; r++) {
        var movieData = {
          title: results[r].title,
          image: `https://image.tmdb.org/t/p/w780${results[r].poster_path}`,
          popularity: results[r].popularity,
          genreID: results[r].genre_ids,
          avgRating: results[r].vote_average,
          summary: results[r].overview,
          release: results[r].release_date,
          favorite: false
        };
        // console.log(movieData);

        $(".horror-carousel")
          .append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}" onclick="showInfo(this)" data-target="modal1">
                </a>`);
      }

      initCarousel();
    });
  }

  function actionCarousel() {
    var tmdb = "d9c79423643387f61ce269ad956c670a";
    //var to get current year to be used in api query to return new releases on home page
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var newRelease = currentYear - 1;
    // console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      // console.log(response.results);

      for (var r = 0; r < 20; r++) {
        var movieData = {
          title: results[r].title,
          image: `https://image.tmdb.org/t/p/w780${results[r].poster_path}`,
          popularity: results[r].popularity,
          genreID: results[r].genre_ids,
          avgRating: results[r].vote_average,
          summary: results[r].overview,
          release: results[r].release_date,
          favorite: false
        };
        // console.log(movieData);

        $(".action-carousel")
          .append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}" onclick="showInfo(this)" data-target="modal1">
                </a>`);
      }

      initCarousel();
    });
  }

  function comedyCarousel() {
    var tmdb = "d9c79423643387f61ce269ad956c670a";
    //var to get current year to be used in api query to return new releases on home page
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var newRelease = currentYear - 1;
    // console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      // console.log(response.results);

      for (var r = 0; r < 20; r++) {
        var movieData = {
          title: results[r].title,
          image: `https://image.tmdb.org/t/p/w780${results[r].poster_path}`,
          popularity: results[r].popularity,
          genreID: results[r].genre_ids,
          avgRating: results[r].vote_average,
          summary: results[r].overview,
          release: results[r].release_date,
          favorite: false
        };
        // console.log(movieData);

        $(".comedy-carousel")
          .append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}" onclick="showInfo(this)" data-target="modal1">
                </a>`);
      }

      initCarousel();
    });
  }

  function initCarousel() {
    $(".carousel").carousel({
      duration: 200,
      fullWidth: false
    });

    // Init Slider
    $(".slider").slider();
  }

  function initNewRelease() {
    $(".carousel").carousel({
      duration: 200,
      fullWidth: false
    });

    setInterval(function() {
      $(".new-release").carousel("next");
    }, 2000); // every 2 seconds

    // Init Slider
    $(".slider").slider();
  }
});

// clicking on carousel item
function showInfo(event) {
  var imageTitle = event.alt;
  var imageUrl = event.currentSrc;
  $("#modal-image").html(
    `<img class="carousel-to-modale-img" src="${imageUrl}" alt="Poster for ${imageTitle}">`
  );
  $("#modal-title").html(`${imageTitle}`);
  $("#modal-title").addClass("carousel-to-modale-title");
  //   $("#modal-year").html(`${movieData.year}`);
  //   $("#modal-rating").html(`Rated: ${movieData.rating}`);
  //   $("#modal-summary").html(`${movieData.summary}`);

  // Add To Favorites Button
  favorite = $("#favorite");

  // Add Button to Modal
  $(favorite).html("favorite_border");

  // Clicking on "favorite" heart icon
  $(favorite)
    .off()
    .on("click", function(event) {
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
}
