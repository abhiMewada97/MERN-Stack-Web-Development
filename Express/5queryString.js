const express = require("express");
const app =  express();

let ports = 8080;

app.listen(ports, (req,res) =>{
    console.log("server on ");
})

app.get("/:username/:id", (req,res) => {
    console.log(req.params);
    res.send("hello, i am root");
});

app.get("/:username/:id", (req,res) => {
    let {username,id}= req.params;
    let htmlStr = `<h1>welcome to the page of @${username} and the id is ${id}</h1>`
    res.send(htmlStr);
});


// request in url with some query string so how to handle query string 
// search/?q=apple
// search/?q=apple&q=red
// search/?q=apple&color=red

app.get("/search", (req, res)=> {

    let {q} = req.query;
    if(!q) {
        res.send("nothing search ");
    }

    console.log(req.query);
    res.send(`Search result for query: ${q} `);
})
