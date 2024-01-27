const express = require("express")
const app = express()   // express return some value
                        //app obj help in creating server side app (web app)

// console.log(app);
console.dir(app);

// let port = 3000   // making cumstom server
let port = 8080

app.listen(port, ()=>{  // app.listen is a function jo ki incoming request ko listen kerta rahta hai 
                        // it takes two parameters
                        // listen make "web server" for coming "api"

    console.log(`server is started app is listing on port ${port}`);
});

app.use((req,res) =>{        // "req", "res" are object
    // console.log(req);
    console.log("request received");
    res.send("This is response");
});

// to stop server cmd "crtl+c"



// all http request is basicaly text bassed because dusri language ke ander jo server likhe hua hai bo bhi enhe samajh paye
// express convert that request into object  so that js understand // this process is "passing"