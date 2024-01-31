const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = 8080;
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.get("/chats", async (req,res)=>{ 
     
    let chats = await Chat.find();
    console.log(chats);
    res.render("showing_CreateChat.ejs",{chats});
})

app.get("/chat/new",(req,res) => {
    res.render("createNewChat.ejs");
});

app.post("/chats",async (req,res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg: msg,
        created_at: new Date(),
    });

    newChat.save()
    .then( ()=> {
        console.log("chat saved");
    })
    .catch( (err)=> {
        console.log(err);
    });

    // let chats = await Chat.find();
    // console.log(chats);
    // res.render("showing_CreateChat.ejs",{chats});

    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("working well");
})

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})