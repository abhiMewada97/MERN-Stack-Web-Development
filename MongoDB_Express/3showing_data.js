const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = 8080;
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

// let chat1 = new Chat({
//     from: "abhishek",
//     to: "sachin",
//     // massage: "send me your exam sheet",     //it is not field of schema so db ignor it
//     msg: "send me your exam sheet",
//     created_at: new Date()
// });

// chat1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

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

// show data 
// app.get("/chat",(req,res)=>{         // we can not use await for Chat.find() until we not make async func
app.get("/chats", async (req,res)=>{     // we have to make async function 
                                        // because of Chat.find() function is also a async function and we have to waite for it
    
    // let chats = Chat.find();   // Chat.find() id a async function that return promises so we have to wait
    let chats = await Chat.find();
    console.log(chats);
    res.render("showingChat.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("working well");
})

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})