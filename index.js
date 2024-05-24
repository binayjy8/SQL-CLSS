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

  app.get("/", (req, res)=> {
    res.send("welcom to home page");
  });

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





  