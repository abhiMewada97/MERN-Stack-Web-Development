const express = require("express");
const app = express();

app.use("/",(req,res,next)=> {
    console.log("hi, i am root");
    next();
});

app.get("/err",(res,req) => {
    ab = ab;
});

// creating error handler
app.use((err, req, res, next) => {
    // console.log(err);
    console.log("--------    ERROR     -----------");
    
    // next();     // Cannot   GET/err
                // error handling middleware
                //   |>
                // next()
                //   |>
                // next non-error handler
    
    next(err);      // should always pass err       // this statement means
                    // we have handled the error, now what upcoming error handler will come
                    // it may be our custom error handler or it may be express default error handler
});

app.use((err, req, res, next) => {
 
    console.log("--------    ERROR2 Middleware     -----------");    
    next(err);
});

// app.use("/",(req,res)=> {
//     console.log("Page not found Mr Abhishek");
//     res.status(404).send("Page not found Mr Abhishek");
// });

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});