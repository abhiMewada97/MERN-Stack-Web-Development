// npm install uuid --> install

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');    // 'v4' means 'version 4' for creating this 'id'
// uuidv4();       // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

// jab ham data bases se deal karenge to databases me "id" automatic create hoti hai
let posts = [
    {
        id:uuidv4(),
        username:"abhishek",
        content: "hard work is important to achieve goal"
    },
    {
        id:uuidv4(),
        username:"rahul",
        content: "got selected in internship"
    },
    {
        id:uuidv4(),
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
    let id = uuidv4();

    posts.push({id,username,content});

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