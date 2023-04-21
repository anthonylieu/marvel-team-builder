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

// router.get("/:title", async (req, res) => {
//   try {
//     const characterData = await Character.findByPk(req.params.title, {
//       include: [{ model: Character }],
//       attributes: {
//         include: [
//           [
//             // Use plain SQL to get a character
//             sequelize.literal(
//               `SELECT * FROM characters WHERE title = "${title}";`
//             ),
//           ],
//         ],
//       },
//     });

//     if (!characterData) {
//       res.status(404).json({ message: "No Character Found with that title" });
//       return;
//     }

//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
