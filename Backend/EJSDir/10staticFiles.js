const express = require("express");

const app = express();

const port = 8080;

app.use(express.static("public/css"));
app.use(express.static("public/js"));
// app.use(express.static(path.join(__dirname,"public/css")));

app.listen(port,()=>{
    console.log("server on");
});


app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instData = require("./9instaDatabase.json");
    const data = instData[username];
    // console.log(data);
    if(data) {
        res.render("instaDataBase.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
});