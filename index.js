const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
        });
      } catch (err) {
        console.log(err);
        res.send("some err in DB");
      }
  });

  app.get("/user", (req, res) => {
    let q = `SELECT  * FROM user`;
    try {
        conn.query(q,  (err, result) => {
        if(err) throw err;
        // console.log(result);
        res.render("showusers.ejs");
        });
      } catch (err) {
        console.log(err);
        res.send("some err in DB");
      }
  })

  app.listen("8080", ()=> {
    console.log("listening to the port 8080");
  });

    
    





  