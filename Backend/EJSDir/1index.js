const express = require("express");
const app = express();

const port=8080;

// "ejs" is a "package"
//"ejs" package ko hamne kyu nahi require kiya becuase "ejs" ko "express" by default internaly require ker leta hai

app.set("view engine", "ejs");  // "app.set" is use to set diff. diff. things
                                //"app" ke ander ek function hota hai "set" karke jo "veiw engine" ko set kar dega to "ejs"
                                // by default jabh bhi hum "express" ke ander "view engine" ko use karte hai 
                                // to view engine expect karta hai ki hamare jitne bhi "views" hai yani jitne bhi jo hamare "ejs templet" banenge 
                                // bo sare ke sare ek "views" name ke folder me hone chahiye
                                // we can also give another name in place of "views"

// view -> templates
// template ko dikhane ke kam ayega that is "ejs"

app.listen (port, ()=>{
    console.log(`listen on port ${port}`);
});


app.get("/aa",(req,res)=>{
    
    res.render("home.ejs");     //with the help of "ejs" we "render" the response, not "send" the response
                                // In "render" we send the file
                                // In render we send ".ejs" extention file
                                // but in "send" we send the "string" "array" "boolean" "obj" or we can send direct html 
});