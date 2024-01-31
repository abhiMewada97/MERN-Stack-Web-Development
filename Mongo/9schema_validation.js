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

// const bookSchema = mongoose.Schema ({
//                                       // this type of constrain writen when we have many constrain
//   title: { type: String,  },          // actuly ye bala sahi way hai schema define ka

//   title:String,                       // this is short form also
//   price:Number,                       // this type of constrain writen when we have only datatype constrain
// });



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

const book1 = new Book ({
  title: "new chapter 2 ",
  price: 1120,
  // price: "1200",     // mongodb internali do typecast // now string "1200"  into number 1200
  // price: "abc",     // mongodb internali do typecast // error typecast invalid
  category: "fiction",
  genre: ["superhero","fiction","comics"]
});

book1.save()
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});