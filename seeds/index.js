const sequelize = require('../config/connection');
// const seedGallery = require('./galleryData');
const seedCharacters = require('./charactersData');
const seedAll = async () => {
  await sequelize.sync({ force: true });
//   await seedGallery();
  await seedCharacters();
  process.exit(0);
};
seedAll();





