// figlet install in "FigletDir" 
// here we are trying to access other directory local figlet



// using below "cmd" we giving parmition to treate us as a "administrator"
// this command is written because we need admin access before installing globally
// not write this command will give error
//        ^
//        |
// sudo chown -R $USER/usr/local/lib/node_modules

// we have to install globali in that folder
// cmd // npm install -g figlet       // //   to install globali
// cmd // npm link figlet


var figlet = require("figlet");

figlet("Abhishek", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});