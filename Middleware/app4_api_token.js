const express = require("express");
const app = express();

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

// middleware                   // localhost:8080/api/?token=giveaccess
app.use("/api",(req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    console.log("Access Denied !");
    res.send("Access Denied !");
});

app.get("/api",(req,res)=> {
    console.log("data");
    res.send("data");
});

// 404 error
// app.use("",(req,res)=> {    both are same
app.use("/",(req,res)=> {
    console.log("404 Page not found Mr Abhishek");
    res.send("404 Page not found Mr Abhishek");
    // res.status(404).send("404 Page not found Mr Abhishek");
});

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});