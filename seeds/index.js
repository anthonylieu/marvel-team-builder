const sequelize = require("../config/connection");
const seedCharacters = require("./charactersData");
const userData = require("./userData");
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCharacters();
  await userData();
  process.exit(0);
};
seedAll();
