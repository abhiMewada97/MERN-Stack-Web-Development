const express = require("express");

const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log("server on");
});


// app.get("/ig/:username",(req,res)=>{
//     const instaData = require("./9instaDatabase.json");     //"instData" variable is a javascript object
//     console.log(instaData);
//     res.render("instaData.ejs", { data: instaData });
// });

app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instData = require("./9instaDatabase.json");
    const data = instData[username];
    // console.log(data);
    console.log(typeof(data));
    if(data) {
        res.render("instaData.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
});