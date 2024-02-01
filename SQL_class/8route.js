//install
// npm i express
// npm i uuid


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '@abhishek',
});

let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

app.get("/", (req,res) => {
    let q = `select count(*) from user`;  // we can use any one -->  ` `     ' '     " "
    try {
        connection.query(q,(err,result) => {
            if(err) throw err;
            
            console.log(result);
            console.log(result[0]);
            console.log(result[0].key);
            console.log(result[0]['count(*)']);
            
            res.send(result[0]);
        });
        
    } catch (err) {        
        res.send("Some error occure");
    }
});

app.listen("8080", () =>{
    console.log("listening on port 8080");
});