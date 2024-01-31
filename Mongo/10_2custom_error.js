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
    min: [1,"Price is to low for amazon selling"],
  },
  descount: {
    type: Number,
    default:0,
  },
  category: {
    type: String,
    enum: ["fiction","non-fiction"], 
  },
  genre: [String]
})

// data colletion (model) formed
const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate ("659226947465b02cbac0b7a3",
    {price:-50},   
    {runValidators: true}, 
)

.then((res)=>{
  console.log(res);
})
.catch((err)=>{
//   console.log(err);
//   console.log(err.errors);
//   console.log(err.errors.price);
//   console.log(err.errors.price.properties);
  console.log(err.errors.price.properties.message);
});