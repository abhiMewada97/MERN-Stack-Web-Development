const express = require("express");

const app = express();
const port = 8080;

app.set("view engine", "ejs");

// lis
app.listen (port, ()=>{
    console.log(`listen on port ${port}`);
});


app.get("/rolldice",(req,res)=>{
    // res.render("rolldice.ejs");                    // value1
    let diceVal = Math.floor(Math.random()*6)+1;

    // all are work same given below
    res.render("rolldice.ejs",{num: diceVal});     // database value  // render ke ander seconde argument pass ker rahe hai as an object
    // res.render("rolldice.ejs",{diceVal: diceVal});     // database value  // render ke ander seconde argument pass ker rahe hai as an object
    // res.render("rolldice.ejs",{diceVal});     // database value  // render ke ander seconde argument pass ker rahe hai as an object
});