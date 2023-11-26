const seedPostData = require("./blogPostSeeds");
const seedUserData = require("./userSeeds");
const seedCommentData = require("./commentSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();

  await seedPostData();

  await seedCommentData();
  console.log("Seeding was successful!");

  process.exit(0);
};

seedAll();
