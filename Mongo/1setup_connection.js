const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');  //connet is asynchronous function, wait for promises
                                                        
                                                        // mongodb -->protocol 
                                                        // 127.0.0.1 --> localhost  
                                                        //  27017  --> port 
                                                        //  test  --> path

// above line3 work same as below code 11 to 16 working    

// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

main()
.then( () =>{
        console.log("connection successfull");
    })
.catch( (err) => 
        console.log(err)
    );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}