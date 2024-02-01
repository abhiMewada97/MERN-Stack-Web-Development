const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

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
// count
app.get("/", (req,res) => {
    let q = `select count(*) from user`;
    try {
        connection.query(q, (err,result) => {
            if(err) throw err;
            
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
        
    } catch (err) {        
        res.send("Some error occure");
    }
});

// show details
app.get("/user", (req,res) => {
    let q = `select * from user`;
    try {
        connection.query(q, (err,result) => {
            if(err) throw err;
            // res.send(result);
            res.render("11showuser_edit.ejs",{result});
        });

    } catch (err) {
        res.send("error occure ");
    }
});

// edit username
app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params;
    let q = `select * from user where id='${id}'`
    try {
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user = result[0];
            // console.log(result);
            res.render("edit.ejs",{user});
        });

    } catch (err) {
        res.send("error occure ");
    }
});

// update (DB) route
app.patch("/user/:id",(req,res)=>{
    
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `select * from user where id='${id}'`

    try {
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("wrong password"); 
            }
            else{
                let q2 = `update user set username='${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            // res.render("edit.ejs",{user});
        });

    } catch (err) {
        res.send("error occure ");
    }
});

app.listen("8080", () =>{
    console.log("listening on port 8080");
});
