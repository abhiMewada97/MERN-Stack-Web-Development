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

// User.deleteOne({name:"Adam"})
// User.deleteMany({age:"30"})
// User.findByIdAndDelete("6591765fee94b5b0a11cb008")
User.findOneAndDelete({name:"ri"})
.then( (res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})