// const mongoose = require('mongoose');
// const {Schema} = mongoose;

// main()
//     .then (() => console.log("connection successful") )
//     .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
// }

// const userSchema = new Schema ({
//     username: String,
//     email: String,
// });

// const postSchema = new Schema ({
//     content: String,
//     likes: Number,
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
// });

// const User = new mongoose.model("User",userSchema);
// const Post = new mongoose.model("Post",postSchema);

// const addData = async ()=> {
    
//     let user1 = new User({
//         username: "Rahul kumar",
//         email: "rahul@gmail.com",
//     });

//     let post1 = new Post({
//         content: "good morning",
//         likes: 7,
//     });

//     post1.user = user1;

//     await user1.save();
//     await post1.save();
// }

// addData();

// ///////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then (() => console.log("connection successful") )
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema ({
    username: String,
    email: String,
});

const postSchema = new Schema ({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = new mongoose.model("User",userSchema);
const Post = new mongoose.model("Post",postSchema);

// const addData = async ()=> {
    
//     let user1 = await User.findOne({username: "Rahul kumar"});

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 10,
//     });

//     post2.user = user1;

//     await post2.save();
// }

// addData();
 

const getData = async ()=> {
    // let result = await Post.findOne({}).populate("user");
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
};

getData();