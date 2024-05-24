const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'binay12#'
  });
  
  let  gateRandomUser = () =>  {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

  let q = "INSERT INTO  user (id, username, email, password) VALUES ?";
    
  let data = [];
    for(let i=1; i<=100; i++) {
        data.push(gateRandomUser());
    }

  try {
    conn.query(q, [data],  (err, result) => {
    if(err) throw err;
    console.log(result);
    });
  } catch (err) {
    console.log(err);
  }

conn.end();

    app.listen("8080", ()=> {
        console.log("listening to the port 8080");
    });





  