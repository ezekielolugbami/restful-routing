var express    = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    app        = express();


//set up
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");