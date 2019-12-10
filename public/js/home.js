require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");

var movieDB = (keys.movieDB);
console.log(movieDB);
// populateCarousel();

function populateCarousel() {

    //var to get current year to be used in api query to return new releases on home page
    var newRelease = currentTime.getFullYear()
    console.log(newRelease);

    var queryURL = `https://api.themoviedb.org/3/movie/550?api_key=${movieKey}`
    console.log(movieKey);
    console.log(queryURL);

    axios.get(queryURL)
}