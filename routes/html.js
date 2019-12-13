const router = require("express").Router();
var path = require("path");


  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = router;
