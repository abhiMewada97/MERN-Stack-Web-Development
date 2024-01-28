const express = require("express");
const app = express();

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

app.use("/random",(req,res)=> {
    console.log("hi, i am random page");
    res.send("hi, I am random page");
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