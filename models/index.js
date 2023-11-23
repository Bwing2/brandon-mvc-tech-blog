const Posts = require("./BlogPosts");
const Users = require("./Users");

Users.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

module.exports = { Posts, Users };
