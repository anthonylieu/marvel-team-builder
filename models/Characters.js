// Import necessary packages and modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Define the Characters class which extends the Model class from sequelize
class Characters extends Model {

  // Define a method to compare a password to the hashed password for a given character
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Characters.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    durability: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    energy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    fighting_skills: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 7,
      },
    },
    strength: {
      type: DataTypes.INTEGER,
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
  {
    hooks: {
      beforeCreate: async (newCharacterData) => {
        newCharacterData.password = await bcrypt.hash(
          newCharacterData.password,
          10
        );
        return newCharacterData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Characters",
  }
);

module.exports = Characters;
