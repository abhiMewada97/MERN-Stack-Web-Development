const express = require("express");
const app = express();

// logger  // also study "morgan"
app.use((req,res,next)=> { 
    // req.responseTime = new Date(Date.now()).toString
    // console.log(req);
    // console.log(req.method);
    // console.log(req.method, req.hostname, req.path);
    
    // req.time = Date.now();                              // if not write this then "req.time" will be undefined
    // req.time = new Date(Date.now());                              // if not write this then "req.time" will be undefined
    req.time = new Date((Date.now()).toString());                              // if not write this then "req.time" will be undefined
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

// app.use("/", ()=> {
//     console.log("hi, i am root");
// });

app.use("/random",(req,res)=> {
    console.log("hi, i am random page");
    res.send("hi, I am random page");
});

// logger  // also study "morgan"         // we should not write here it should we write above 
// app.use((req,res,next)=> { 
   
//     req.time = new Date((Date.now()).toString());                              // if not write this then "req.time" will be undefined
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});