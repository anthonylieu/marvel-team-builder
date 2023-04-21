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
const { User, Character } = require("../models");

const userData = require("./userData.json");
const charactersData = require("./charactersData.json");

// const seedCharacters = async () => {
//   console.log("seedCharacters Started");
//   await sequelize.sync({
//     force: true,
//   });
//   await Character.bulkCreate(charactersData, {
//     individualHooks: true,
//     returning: true,
//   });
// };

// const seedUsers = async () => {
//   console.log("seedUsers Started");
//   await sequelize.sync({
//     force: true,
//   });
//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
// };

// seedCharacters();
// seedUsers();

// process.exit(0);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of charactersData) {
    await Character.create({
      ...character,
    });
  }

  process.exit(0);
};

seedDatabase();
