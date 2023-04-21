// const sequelize = require("../config/connection");
// const seedCharacters = require("./charactersData");
// const userData = require("./userData");
// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   await seedCharacters();
//   await userData();
//   process.exit(0);
// };
// seedAll();

const sequelize = require("../config/connection");
const { User, Characters } = require("../models");

const userData = require("./userData.json");
const charactersData = require("./charactersData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const character = await Characters.bulkCreate(charactersData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
