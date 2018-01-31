const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require('../routes/api')
const db = require("../models").db;

const app = express();

// logging and body-parsing
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));


app.use('/api', routes);

// handle any errors
app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send("Something went wrong: " + err.message);
});



// listen on a port
const port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});
