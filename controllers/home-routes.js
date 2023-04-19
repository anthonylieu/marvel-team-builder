const express = require("express");
const router = express.Router();
const sequelize = require("../config/connection");
const Character = require('../models/Characters'); // Import your Sequelize model

// Get all characters
router.get("/characters", async (req, res) => {
  try {
    const [results] = await sequelize.query("SELECT * FROM Characters");
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving characters" });
  }
});

// Get a character by ID
router.get("/characters/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await sequelize.query(`SELECT * FROM Characters WHERE id = ${id}`);
    res.json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving character" });
  }
});

// Get character sheet
router.get("/character-sheet", async (req, res) => {
  try {
    const charactersData = await Character.findAll();
    const characters = charactersData.map((character) => character.get({ plain: true }));

    res.render("character-sheet", { characters });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving character sheet" });
  }
});

router.get('/', (req, res) => {
  res.render("homepage");
});

module.exports = router;