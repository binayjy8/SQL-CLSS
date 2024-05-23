const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'binay12#'
  });
  
  try {
    conn.query("SHOW TABLES", (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
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


  