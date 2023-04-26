const express = require("express");
const { Character } = require("../models");
const router = express.Router();

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

router.get("/:id", async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  // Now, we have access to a dish description in the 'dish' template.
  const characterData = await Character.findByPk(req.params.id);
  console.log(req.params.id);
  console.log(characterData);
  const characters = characterData.get({ plain: true });
  console.log(characters);
  // Replace 'characters' with actual data you want to pass to the template
  res.render("character", { characters });
});

module.exports = router;
