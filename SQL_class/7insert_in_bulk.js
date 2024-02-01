const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

let q = "INSERT INTO user (id,username,email,password) VALUES ?";
let users = [];

for(let i=1; i<=100; i++) {
    users.push(getRandomUser());   // adding 100 random user
}

try{
    connection.query(q, [users], (err,result) => {  
        if(err) throw err;
        // console.log(result);
    });
} 
catch(err){
    console.log(err);
}