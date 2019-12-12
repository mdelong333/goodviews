var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "../public/index.html");
  });

  app.get("/browse.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/browse.html"));
  });

  app.get("/community.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community.html"));
  });

  app.get("/mytitles.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mytitles.html"));
  });

  app.get("/blog.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
