const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  // {
  //   // Occurs before password is stored, password is hashed 10 rounds and reassigned back to "newUser"
  //   hooks: {
  //     beforeCreate: async (newUser) => {
  //       newUser.password = await bcrypt.hash(newUser.password, 10);
  //       return newUser;
  //     },
  //   },
  // },
  {
    sequelize,
    timestamps: false,
    freezerTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
