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

// User.findOneAndUpdate({name:'Adam'},{age:30})   // return original document
User.findOneAndUpdate({name:'Adam'},{age:30}, {new:true})   //by default value of new is false
                                                            //return the modified document rather then original document
.then( (res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})