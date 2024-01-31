const mongoose = require('mongoose');

main()
.then( () =>{
        console.log("connection successfull");
    })
.catch( (err) => 
        console.log(err)
    );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

// schema
const bookSchema = mongoose.Schema ({
  title: {
    type: String,
    require: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,   // price should be 1 or more
  },
  descount: {
    type: Number,
    default:0,
  },
  category: {
    type: String,
    enum: ["fiction","non-fiction"],  // during insert if we give other then this 2 gategory so it give error
  },
  genre: [String]
})

// data colletion (model) formed
const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate ("659226947465b02cbac0b7a3",
    {price:-50},   // no error


    // {price:-50},            //error
    // {runValidators: true},  // now validation also work with updation 
)

.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});