const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

// jab ham data bases se deal karenge to databases me "id" automatic create hoti hai
let posts = [
    {
        id:"1a",
        username:"abhishek",
        content: "hard work is important to achieve goal"
    },
    {
        id:"2a",
        username:"rahul",
        content: "got selected in internship"
    },
    {
        id:"3a",
        username:"amit",
        content: "learning something"
    },
];

app.get("/posts",(req,res)=>{
    res.render("4index.ejs",{posts});
});

app.get("/posts/new", (req,res)=>{
    res.render("form.ejs");
});

app.post("/posts", (req,res) =>{
    console.log(req.body);
    let {username,content} =req.body;

    posts.push({username,content});

    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=> {
    let {id} = req.params;
    let post = posts.find((p) => p.id === id);
    console.log(post.id);
    // res.send("requesting working");
    res.render("show.ejs",{post});
});

app.listen(port, (req,res) =>{
    console.log(`listening on port ${port}`);
});