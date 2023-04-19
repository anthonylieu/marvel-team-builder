const Sequelize = require("sequelize");
const sequelize = require("./connection");

const Character = sequelize.define("character", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  intelligence: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  strength: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  speed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  durability: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  energy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fighting_skills: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Character;