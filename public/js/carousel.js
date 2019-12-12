// require("dotenv").config();
// var keys = require("./keys");
// var axios = require("axios");

// var tmdb = (keys.tmdb);
// console.log(tmdb.id);

// var currentTime = new Date();
// var currentYear = currentTime.getFullYear()
// var newRelease = currentYear - 1;
// console.log(newRelease);

// var queryURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb.id}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${newRelease}`
// console.log(queryURL);

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
        var currentYear = currentTime.getFullYear()
        var newRelease = currentYear - 1;
        // console.log(newRelease);

        var queryURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${newRelease}`
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
                    release: results[r].release_date
                };
                // console.log(movieData);

                $(".new-release").append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}"><button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
                </a>
                `)

            };

            initCarousel();
        });

    };

    function dramaCarousel() {
        
        var tmdb = "d9c79423643387f61ce269ad956c670a";
        //var to get current year to be used in api query to return new releases on home page
        var currentTime = new Date();
        var currentYear = currentTime.getFullYear()
        var newRelease = currentYear - 1;
        // console.log(newRelease);

        var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
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
                    release: results[r].release_date
                };
                // console.log(movieData);

                $(".drama-carousel").append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}">
                <button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
                </a>`)

            };

            initCarousel();
        });

    };

    function horrorCarousel() {
        
        var tmdb = "d9c79423643387f61ce269ad956c670a";
        //var to get current year to be used in api query to return new releases on home page
        var currentTime = new Date();
        var currentYear = currentTime.getFullYear()
        var newRelease = currentYear - 1;
        // console.log(newRelease);

        var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
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
                    release: results[r].release_date
                };
                // console.log(movieData);

                $(".horror-carousel").append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}">
                <button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
                </a>`)

            };

            initCarousel();
        });

    };

    function actionCarousel() {
        
        var tmdb = "d9c79423643387f61ce269ad956c670a";
        //var to get current year to be used in api query to return new releases on home page
        var currentTime = new Date();
        var currentYear = currentTime.getFullYear()
        var newRelease = currentYear - 1;
        // console.log(newRelease);

        var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
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
                    release: results[r].release_date
                };
                // console.log(movieData);

                $(".action-carousel").append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}">
                <button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
                </a>`)

            };

            initCarousel();
        });

    };

    function comedyCarousel() {
        
        var tmdb = "d9c79423643387f61ce269ad956c670a";
        //var to get current year to be used in api query to return new releases on home page
        var currentTime = new Date();
        var currentYear = currentTime.getFullYear()
        var newRelease = currentYear - 1;
        // console.log(newRelease);

        var queryURL = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
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
                    release: results[r].release_date
                };
                // console.log(movieData);

                $(".comedy-carousel").append(`<a href="#one!" data-target="modal1" class="carousel-item btn-small modal-trigger">
                <img src="${movieData.image}" alt="${movieData.title}">
                <button class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="far fa-heart heart red-text"></i></button><button class="waves-effect waves-light btn-small grey darken-4"><i class="fas fa-clipboard-list"></i></button>
                </a>`)

            };

            initCarousel();
        });

    };

    function initCarousel() {
        $('.carousel').carousel({
            duration: 200,
            fullWidth: false
        });
        
        setInterval(function() {
        $('.carousel').carousel('next');
        }, 2000); // every 2 seconds
    
        // Init Slider
        $('.slider').slider();
    };

});