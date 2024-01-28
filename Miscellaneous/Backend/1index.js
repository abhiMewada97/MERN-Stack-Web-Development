const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));      // use to make readable formate for url
app.use(express.json());                           // use to make readable formate for json

// req object ke ander body name ki property hoty hai jiski help se req ki body ke under jo data hota use access karne ke liye

app.get("/register", (req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard GET response, Welcome ${user}`);
});

app.post("/register", (req,res)=>{
    // console.log(req.body);
    let {user,password}=req.body;         // empty if we not use above readable formate
    res.send(`Standard POST response, Welcome ${user}`);
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});