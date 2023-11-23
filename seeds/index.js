const seedPostData = require("./blogPostSeeds");
const seedUserData = require("./userSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();

  await seedPostData();
  console.log("Seeding was successful!");

  process.exit(0);
};

seedAll();
