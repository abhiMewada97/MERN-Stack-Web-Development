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

// it is create in memory but not insert in db
// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });


// but now insert in db

// user1.save()   // jo instances (user1 instances) bante hai model ke unke pass by default have save() method which is async func that return promise


const user2 = new User({
    name: "eve",
    email: "eve@yahoo.in",
    age: 88,
});


// but now insert in db

user2.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})