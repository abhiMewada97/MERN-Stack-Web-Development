// npm init -y
// npm i express
// touch 0index.js


const express = require("express");
const app = express();
const port = 8080;


app.get("/register", (req,res)=>{
    // let {user,password}=req.query;
    // let {user,password}=req.params;     //undefine
    let {user}=req.query;
    // let {user}=req.params;           //undefine
    res.send(`Standard GET response, Welcome ${user}`);
});

app.post("/register", (req,res)=>{
    res.send("Standard POST response");
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
}); 