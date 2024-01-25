const express = require("express");

const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log("server on");
});


app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
   
    console.log(username);
    console.log(typeof(username));         //quiry string come in the form of string

    res.render("insta.ejs", { username });
    
    // res.render("Hello insta ");     // give error
    // res.send("j");                   // this will not give error
});