const express = require("express");

const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log("server on");
});


app.get("/ig/:username",(req,res)=>{
    let followers = ["abhishek","aman","ankit","sachin","sandeep"];
    let { username } = req.params;
    res.render("passing.ejs", { username, followers });
});