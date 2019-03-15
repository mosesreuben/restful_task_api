//Imports
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//Config
app.use(bodyParser.json());

//Routes
require("./backend/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})