//set up dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgercontroller.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

//set up handlebars to control what user sees
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});