const express = require("express");
const {Character} = require("../models");
const router = express.Router();


// router.get('/', (req, res) => {
//     res.render("character-sheet")
//   });

  router.get("/", async(req, res) => {
    const characterData = await Character.findAll().catch((err) => { 
      res.json(err);
    });
    const characters = characterData.map((character) => character.get({ plain: true }));
    console.log(characters);
    // Replace 'characters' with actual data you want to pass to the template
    res.render("character-sheet", { characters });
  });

  module.exports = router;