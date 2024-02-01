const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '@abhishek',
});

let q = "INSERT INTO user (id,username,email,password) VALUES ?";
let users = [
            ["132q3","152q3_name", "nasdameq@gmail.com", "reaqbc"],
            ["162q3","1s2q3_name", "nasdfdameq@gmail.com", "aqbtrc"],
        ];

try{
    connection.query(q, [users], (err,result) => {  
        if(err) throw err;
        console.log(result);
    });
} 
catch(err){
    console.log(err);
}

connection.end();