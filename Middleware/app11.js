const express = require("express");
const app = express();
const ExpressError = require("./ExpressError9");

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken, (req,res)=> { 
    console.log("data");
    res.send("data");
});


app.get("/err",(res,req) => {
    ab = ab;
});

// Admin
app.get("/admin",(res,req) => {
    throw new ExpressError(403,"Access to admin is forbidden");
});

// creating error handler
app.use((err, req, res, next) => {

    
    let {status=500,message="Some error occurred"} = err;
    res.status(status).send(message);  
});

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});