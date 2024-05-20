const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

let  gateRandomUser = () =>  {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  console.log(gateRandomUser());
  
  