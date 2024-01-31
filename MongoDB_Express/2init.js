const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

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

let allChats = [
    {
        from: "neha",
        to: "rahul",
        msg: "hii",
        created_at: new Date()
    },
    {
        from: "mohit",
        to: "sohit",
        msg: "kon ho",
        created_at: new Date()
    },
    {
        from: "rohan",
        to: "rahul",
        msg: "exam start",
        created_at: new Date()
    },
    {
        from: "shu",
        to: "ri",
        msg: "nice",
        created_at: new Date()
    },
];

Chat.insertMany(allChats).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});