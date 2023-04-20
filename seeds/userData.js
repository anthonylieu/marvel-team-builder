const { User } = require("../models");
const userData = [
  {
    name: "Sean",
    password: "rootroot",

  },
  {
    name: "Anthony",
    password: "rootroot",
  }
    
];



const seedUsers = async () => {
    await User.sync();
    await User.bulkCreate(userData);
  };
  
  module.exports = seedUsers;