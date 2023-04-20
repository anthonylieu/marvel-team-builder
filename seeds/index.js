const sequelize = require("../config/connection");
// const seedGallery = require('./galleryData');
const seedCharacters = require("./charactersData");
const userData = require("./userData");
const seedAll = async () => {
  await sequelize.sync({ force: true });
  //   await seedGallery();
  // await seedCharacters();
  await userData();
  process.exit(0);
};
seedAll();
