// views folder
// when we try to run server inside "backend", not inside in "EJSDir"

const express = require("express");
const app = express();
const path = require("path");


const port=8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.listen (port, ()=>{
    console.log(`listen on port ${port}`);
});

app.get("/hello",(req,res)=>{
    res.render("hello");
});

app.get("/",(req,res)=>{
    // res.render("interpolation.ejs");
    res.render("interpolation");
});
