const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username:"abhishek",
        content: "hard work is important to achieve goal"
    },
    {
        username:"rahul",
        content: "got selected in internship"
    },
    {
        username:"amit",
        content: "learning something"
    },
];

app.get("/posts", (req,res) => {
    // res.send("serving well!");
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res) => {    // get request me to request ke parameter ke ander query ke under hamari info ati hai
    res.render("form.ejs");
});

app.post("/posts", (req,res) => {  // but post req me request ki body ke under info ati hai
    console.log(req.body);
    let {username,content} = req.body;

    posts.push({username,content});
    
    res.send("post request working");
});

app.listen(port, (req,res) => {
    console.log(`listening on port ${port}`);
} );