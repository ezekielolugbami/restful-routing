var express    = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    app        = express();


//App Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://cdn.pixabay.com/photo/2017/01/17/03/57/desktop-1985856__340.jpg",
//     body: "Hello, this is a test blog post!"
// }, function(err, blog){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("You just created a new blog!")
//         console.log(blog);
//     }
// });


// Restful Routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

// Index Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});


// New Route
app.get("/blogs/new", function(req, res){
    res.render("new");
});









app.listen("3000", function(){
    console.log("Restful app has started, listening on port 3000!"); 
});