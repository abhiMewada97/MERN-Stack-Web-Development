// views folder

const express = require("express");
const app = express();

const port=8080;

app.set("view engine", "ejs");

app.listen (port, ()=>{
    console.log(`listen on port ${port}`);
});

app.get("/",(req,res)=>{
    // res.render("home.ejs");     //"express" by default when we call "res.render" search "views" folder then search home.ejs inside views folder
    res.render("home");     // if we not write ".ejs" extention then also work
});
