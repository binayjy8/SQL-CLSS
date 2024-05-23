const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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
  }

  let q = "INSERT INTO  user (id, username, email, password) VALUES ?";
    
    let data = [];
    for(let i=0; i<=100; i++) {
        data.push(gateRandomUser());
    }

  try {
    conn.query(q, [users],  (err, result) => {
    if(err) throw err;
    console.log(result);
    });
  } catch (err) {
    console.log(err);
  }

conn.end();

    





  