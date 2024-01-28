const express = require("express");
const app = express();

// app.use(() => {            //this middleware workd but after this esh middleware ke bad kya step karna hai ye esh middleware ne nahi bataya
//     console.log("hi, i am middleware");
// });

app.use((req,res,next) => {              // ye har ek req ke liye run hoga to hum given below middleware kabhi run hi nahi ho payenge
    console.log("hi, i am middleware");
    res.send("hi, I am middleware");
    next();             // all below code run
    // return next()       //but now below code not execute because it return from here
    console.log("hi, I am after next");  // this line will also execute but it is not good practice we should always write next() at last
    // res.send("hi, I am after next");
});

app.use("/", ()=> {
    console.log("hi, i am root");
});

app.use("/random",(req,res)=> {
    console.log("hi, i am random page");
    res.send("hi, I am random page");
});

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});