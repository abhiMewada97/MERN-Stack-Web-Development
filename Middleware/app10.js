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

    // let {status,message} = err;         // hamare error se deconstruct karke nikal rahe hai
    let {status=500,message="Some error occurred"} = err;    // here we are setting default value
    res.status(status).send(message);   // this line means we are saying to express default handler ki abh tum mat karo kam hum kudh handle ker lange hamare error ko
                                        // jese hi res object ke status ke pass 401 aya abh res object ko pata chal gaya ki abh mujhe error send karna
                                        // message ke pass bo error message hona chahiye jo express ke error message ke ander hai
});

// app.use((err, req, res, next) => {
 
//     console.log("--------    ERROR2 Middleware     -----------");    
//     next(err);
// });

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});