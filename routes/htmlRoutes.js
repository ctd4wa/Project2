// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
  });

  app.get("/index2", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/index2.html"));
  });

  // blog route loads blog.html
  app.get("/splash", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/splash.html"));
  });

};
