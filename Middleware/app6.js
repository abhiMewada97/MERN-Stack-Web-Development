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
    throw new Error("Access Denied !");  // we are throwing an error
};

app.get("/api", checkToken, (req,res)=> {  // middleware ko as a function eshe pass ker sakte
    console.log("data");
    res.send("data");
});

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});