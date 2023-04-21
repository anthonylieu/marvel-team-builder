const express = require("express");
const { Character } = require("../models");
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render("character-sheet")
//   });

router.get("/", async (req, res) => {
  const characterData = await Character.findAll().catch((err) => {
    res.json(err);
  });
  const characters = characterData.map((character) =>
    character.get({ plain: true })
  );
  console.log(characters);
  // Replace 'characters' with actual data you want to pass to the template
  res.render("character-sheet", { characters });
});

router.get("character/:title", async (req, res) => {
  try {
    const characterData = await Character.findAll({
      where: (title = character.title),
    });
    if (!characterData) {
      res.status(404).json({ message: "No character with this title!" });
      return;
    }
    const character = characterData.get({ plain: true });
    res.render("character", character);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
