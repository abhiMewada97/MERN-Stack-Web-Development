const express = require("express");
const app = express();
const ExpressError = require("./ExpressError9");

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

                                           // localhost:8080/api/?token=giveaccess
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken, (req,res)=> {  // middleware ko as a function eshe pass ker sakte
    console.log("data");
    res.send("data");
});


app.get("/err",(res,req) => {
    ab = ab;
});

// creating error handler
app.use((err, req, res, next) => {

    console.log("--------    ERROR     -----------");

    // next(err);
    res.send(err); // exress not handle error
});

// app.use((err, req, res, next) => {
 
//     console.log("--------    ERROR2 Middleware     -----------");    
//     next(err);
// });

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});