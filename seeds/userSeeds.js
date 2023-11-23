const { Users } = require("../models");

const userData = [
  {
    name: "Test Testerson",
    email: "test@gmail.com",
    password: "qwertyui",
  },
  {
    name: "Second Person",
    email: "second@gmail.com",
    password: "12345678",
  },
];

const seedUserData = () => Users.bulkCreate(userData);

module.exports = seedUserData;
