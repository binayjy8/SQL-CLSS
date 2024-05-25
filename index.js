const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "/views"));

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
    let q = `SELECT count(*) FROM user`;
    try {
        conn.query(q,  (err, result) => {
        if(err) throw err;
        console.log(result[0]["count(*)"]);
        res.send("success");
        });
      } catch (err) {
        console.log(err);
        res.send("some err in DB");
      }
  });

  

  app.listen("8080", ()=> {
    console.log("listening to the port 8080");
  });

    
    
    // conn.end();




  