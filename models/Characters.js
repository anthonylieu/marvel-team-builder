const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Characters extends Model {
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
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
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