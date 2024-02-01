const { faker } = require('@faker-js/faker');


// export function createRandomUser(): User {
let getRandomUser = ()=> {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  console.log(getRandomUser());