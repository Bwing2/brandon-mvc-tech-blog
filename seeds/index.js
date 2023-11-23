const seedPostTags = require("./blogPostSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPostTags();
  console.log("Seeding was successful!");

  process.exit(0);
};

seedAll();
