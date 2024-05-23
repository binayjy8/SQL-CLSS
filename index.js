const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'binay12#'
  });
  
    let q = "INSERT INTO  user (id, username, email, password) VALUES ?";
    let users = [
        ["124", "Dhawanb", "wqer@gmail.comb", "qwertb"],
        ["232", "Dhawanc", "wqer@gmail.comc", "qwertc"],
    ];

  try {
    conn.query(q, user,  (err, result) => {
    if(err) throw err;
    console.log(result);
    });
  } catch (err) {
    console.log(err);
  }

conn.end();

let  gateRandomUser = () =>  {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }


  