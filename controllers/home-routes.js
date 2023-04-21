const express = require("express");
const router = express.Router();
const path = require("path");
const sequelize = require("../config/connection");
const User = require("../models/User"); // Import the User model

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

// Render the homepage
router.get('/', (req, res) => {
  res.render("homepage")
});

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    // Handle password mismatch error
    return res.status(400).send('Passwords do not match');
  }

  try {
    // Create a new user and save it to the database
    const newUser = await User.create({ username, password });
    // Redirect to /character after successful signup
    res.redirect('/character');
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).send('Error creating user');
  }
});

// Render the character-sheet

module.exports = router;
