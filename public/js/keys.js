require("dotenv").config();

exports.omdb = {
  id: process.env.OMDB_api
};

exports.movieDB = {
  id: process.env.movieDB_api
};