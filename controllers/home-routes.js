const express = require("express");
const router = express.Router();

const sequelize = require("../config/connection");

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
router.get('/', (req, res) => {
  res.render("homepage")
});
module.exports = router;