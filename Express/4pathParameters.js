const express = require("express")
const app = express()

let port = 8080;

app.listen(port, ()=>{
    console.log("server on ");
});


// http:localhost:8080/apnacollege -> apnacollege is a username which is treated as a variable

// app.get("/:username/:id", (req,res) => {
//     console.log(req.params);
//     res.send("hello, i am root");
// });


// app.get("/:username/:id", (req,res) => {
//     let {username,id}= req.params;
//     res.send(`welcome to the page of @${username} and the id is ${id}`);
// });


app.get("/:username/:id", (req,res) => {
    let {username,id}= req.params;
    let htmlStr = `<h1>welcome to the page of @${username} and the id is ${id}</h1>`
    res.send(htmlStr);
});