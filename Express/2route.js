const express = require("express")
const app = express()


let port = 8080;

app.listen(port, ()=>{
    console.log(`server is started app is listing on port ${port}`);
});


// app.use((req,res) =>{        //always send same response
    
//     console.log("request received");
//     const code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><ul>";  // we can html also
//     res.send(code);
// });

app.get("/",(req,res) =>{

    res.send("/ on the path ");
});

app.get("/apple",(req,res) =>{

    res.send("Do you want apple");
});

app.get("*",(req,res) =>{

    res.send("This path does not exits ");
});

app.post("/pst",(req,res) =>{

    res.send("you request for post ");
});