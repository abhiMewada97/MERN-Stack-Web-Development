const mongoose = require('mongoose');

main()
.then( () =>{
        console.log("connection successfull");
    })
.catch( (err) => 
        console.log(err)
    );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

User.insertMany(
    [{
        name:"abhi",
        email: "abhi@yahoo.in",
        age:24,
    },
    {
        name:"ri",
        email: "ri@yahoo.in",
        age:22,
    },{
        name:"rahu",
        email: "rahu@yahoo.in",
        age:44,
    }]
).then( (res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})