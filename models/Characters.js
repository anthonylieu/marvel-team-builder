// Import necessary packages and modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Define the Characters class which extends the Model class from sequelize

class Characters extends Model {
  // Define a method to compare a password to the hashed password for a given character
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}
// Initialize the Characters model with properties and validations
Characters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    durability: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    energy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    fighting_skills: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    intelligence: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  // Define hooks that will run before creating a new Character
  {
    // Define the sequelize instance, and other options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Characters",
  }
);
// Export the Characters model for use in other parts of the application.
module.exports = Characters;
