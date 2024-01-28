const express = require("express");
const app = express();

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

// checkToken is a variable which is storing function                   // localhost:8080/api/?token=giveaccess
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    console.log("Access Denied !");
    res.send("Access Denied !");
};

app.get("/api", checkToken, (req,res)=> {  // middleware ko as a function eshe pass ker sakte
    console.log("data");
    res.send("data");
});

// 404 error
// app.use("",(req,res)=> {    both are same
app.use("/",(req,res)=> {
    console.log("Page not found Mr Abhishek");
    // res.send("404 Page not found Mr Abhishek");
    res.status(404).send("Page not found Mr Abhishek");
});

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});