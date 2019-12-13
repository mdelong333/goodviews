var db = require("../models");

module.exports = function(app) {
  // Get all favorites
  app.get("/api/favorites", function(req, res) {
    db.Favorite.findAll({}).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // Create a new favorites
  app.post("/api/favorites", function(req, res) {
    console.log(req.body);

    db.Favorite.create({
      title: req.body.title,
      favorite
    })
  });

  // // Delete an favorites by id
  // app.delete("/api/favorites/:id", function(req, res) {
  //   db.project2
  //     .destroy({ where: { id: req.params.id } })
  //     .then(function(project2) {
  //       res.json(project2);
  //     });
  // });
};
