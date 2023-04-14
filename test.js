const { Painting } = require("../models");
const paintingdata = [
  {
    title: "Spider-Man",
    durability: "2/7",
    energy: "3/7",
    fighting_skills: "4/7",
    intelligence: "5/7",
    speed: "5/7",
    strength: "4/7",
  },
  {
    title: "Iron Man",
    durability: "6/7",
    energy: "7/7",
    fighting_skills: "4/7",
    intelligence: "6/7",
    speed: "5/7",
    strength: "4/7",
  },
  {
    title: "Captain America",
    durability: "3/7",
    energy: "1/7",
    fighting_skills: "6/7",
    intelligence: "3/7",
    speed: "2/7",
    strength: "3/7",
  },
  // Add more characters here using the same format
];
const seedPaintings = () => Painting.bulkCreate(paintingdata);
module.exports = seedPaintings;
