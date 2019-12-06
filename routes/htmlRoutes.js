var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //style server load
  app.get("/css/reset.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/styles/reset.css"));
  });

  app.get("/css/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/styles/style.css"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
