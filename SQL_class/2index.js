// const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '@abhishek',
});

try{    
    // connection.query("SHOW TABLES", (err,result) => {

    let q = "SHOW TABLES";
    connection.query(q, (err,result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
} 
catch(err){
    console.log(err);
}

connection.end();