var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect("mongodb://localhost/music");

var playerSchema = {
  firstName: String,
  lastName: String,
  email: String
};

var Player = mongoose.model("Player", playerSchema, "players");

var app = express();

app.use(cors());

app.get("/players", function(req, res) {
  Player.find((err, doc) => {
    res.send(doc);
  });
});

app.listen(3000);
