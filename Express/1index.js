const express = require("express")
const app = express()

// console.dir(app);

let port = 8080

app.listen(port, ()=>{
    console.log(`server is started app is listing on port ${port}`);
});




// app.use((req,res) =>{            // by default express create this two parameter --> req and res 
    
//     console.log("request received");
//     // res.send("This is response");
//     res.send({       // we are sending js object but express convert it into json representation
//         name:"orange",
//         color:"red",
//     });
// });


// /////////////////           sending response          ///////////////////////

app.use((req,res) =>{
    
    console.log("request received");
    const code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><ul>";  // we can use html also
    res.send(code);
});

