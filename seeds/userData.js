const { User } = require("../models");
const userData = [
  {
    username: "Sean",
    password: "rootroot",
  },
  {
    username: "Anthony",
    password: "rootroot",
  },
];

const seedUsers = async () => {
  await User.sync();
  await User.bulkCreate(userData);
};

module.exports = seedUsers;
