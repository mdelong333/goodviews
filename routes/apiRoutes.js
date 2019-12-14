var db = require("../models");

module.exports = function(app) {
  // Get all favorites
  app.get("/api/favorites", function(req, res) {
    db.Favorite.findAll({}).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  app.get("/api/favorites/:id", function(req, res) {
    db.Favorite.findOne({
      where: {id: req.params.id}
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // Create a new favorites
  app.post("/api/favorites", function(req, res) {
    console.log(req.body);

    db.Favorite.create({
      title: req.body.title,
      poster: req.body.poster,
      summary: req.body.summary,
      rating: req.body.rating,
      year: req.body.year,
      fave: req.body.favorite
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  app.delete("/api/favorites/:id", function(req, res) {
    db.Favorite.destroy({
      where: {id: req.params.id}
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  app.put("/api/favorites", function(req, res) {
    db.Favorite.update({
      fave: req.body.favorite
    }, {
      where: {id: req.body.id}
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });
  
  // app.put("/api/favorites:imdbID", function(req, res) {
  //   db.Favorite.update({
  //     fave: false,
  //     where: {imdbID: "tt1403865"}
  //   })
  // })

  // // Delete an favorites by id
  // app.delete("/api/favorites/:id", function(req, res) {
  //   db.project2
  //     .destroy({ where: { id: req.params.id } })
  //     .then(function(project2) {
  //       res.json(project2);
  //     });
  // });
};
