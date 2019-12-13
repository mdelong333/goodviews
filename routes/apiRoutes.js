var db = require("../models");
var express = require("express");
var router = express.Router();
// var omdb = require("./omdb");

module.exports = function(app) {
  // Get all favorites
  app.get("/api/favorites", function(req, res) {
    db.project2.findAll({}).then(function(project2) {
      res.json(project2);
    });
  });

  // Create a new favorites
  app.post("/api/favorites", function(req, res) {
    db.project2.create(req.body).then(function(project2) {
      res.json(project2);
    });

    db.project2
      .create({
        text: req.body.text,
        complete: req.body.complete
      })
      .then(function(tableElement) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(tableElement);
      });
  });

  // Delete an favorites by id
  app.delete("/api/favorites/:id", function(req, res) {
    db.project2
      .destroy({ where: { id: req.params.id } })
      .then(function(project2) {
        res.json(project2);
      });
  });
};
