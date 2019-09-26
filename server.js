require("dotenv").config();

var express = require("express");
var exphandlebars = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

var syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});