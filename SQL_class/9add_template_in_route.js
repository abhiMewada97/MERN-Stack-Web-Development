//install
// npm i ejs


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

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
            
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
        
    } catch (err) {        
        res.send("Some error occure");
    }
});

app.listen("8080", () =>{
    console.log("listening on port 8080");
});
