// nmp i method-override

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = 8080;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");


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


app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Index Route
app.get("/chats", async (req,res)=>{ 
     
    let chats = await Chat.find();
    console.log("showing_UpdatedChat");
    res.render("showing_UpdatedChat.ejs",{chats});
})

// create chat
app.get("/chat/new",(req,res) => {

    // throw new ExpressError(404,"Page not found");
    res.render("createNewChat.ejs");
});

// // NEW - Show Route
// app.get("/chats/:id", async (req, res, next)=>{
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     res.render("edit.ejs",{chat});
// });

// edit chat
app.get("/chats/:id/edit", async (req,res)=>{
    // try{    
        let {id} = req.params;
        let chat = await Chat.findById(id);
        
        if(!chat){
            // throw new ExpressError(404, "chat not fount");
            next(new ExpressError(404, "chat not fount"));
        }
        res.render("edit.ejs",{chat}); 
    // }catch(err){
    //     next(err);
    // }
});

// update chat
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    // let msgNew = req.body;
    let {msg: msgNew} = req.body; 
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: msgNew},{runValidators: true, new: true});
    console.log(updatedChat);
    
    res.redirect("/chats");
});

// destroy chat
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    
    let deleteChat = await Chat.findByIdAndDelete(id,{runValidators: true, new: true});
    console.log(deleteChat);   
    res.redirect("/chats");
});

// show chat
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

    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("working well");
})

// Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})