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


// data already insert now we are finding

// User.find()
// User.find({})
// User.find({age:{$gt:47}})
// User.findOne({age:{$gt:47}})

// .then( (res) => {
//     console.log(res);
//     // console.log(res[0]);
//     // console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findOne({_id:"6591765fee94b5b0a11cb008"})
User.findById("6591765fee94b5b0a11cb008")
.then( (res) => {
    console.log(res);
    // console.log(res[0]);       // undefine, because result not come in form of array
    // console.log(res[0].name);  // error, because result not come in form of array
})
.catch((err)=>{
    console.log(err);
})