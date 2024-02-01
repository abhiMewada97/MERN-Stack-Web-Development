const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '@abhishek',
});

// trying to insert new data

// placeholder is quest mark which replace by value
// use to put value dynamicaly

let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";  // currently we have not value so we are using quest marks
let user = ["12q3","12q3_name", "nameq@gmail.com", "aqbc"];

try{
    connection.query(q, user, (err,result) => {       // connection.query kya karega jabh bhi esh 'q' query ke ander ushe koi placeholder milega to 
                                                // bo 'user' array ke ander koi value hai to ushe baha se uthaker ushe query me put karne ki kosis karega
        if(err) throw err;
        console.log(result);
    });
} 
catch(err){
    console.log(err);
}

connection.end();