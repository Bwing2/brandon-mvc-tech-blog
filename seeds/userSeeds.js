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
  {
    name: "Third Person",
    email: "third@gmail.com",
    password: "ABCDEFGH",
  },
];

const seedUserData = () => Users.bulkCreate(userData);

module.exports = seedUserData;
