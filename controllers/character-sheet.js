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

router.get("characters/:title", async (req, res) => {
  try {
    const characterData = await character.findAll(req.params.title);
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

// outer.get('/', async (req, res) => {
//   try {
//     const readerData = await Reader.findAll({
//       include: [{ model: LibraryCard }, { model: Book }],
//       attributes: {
//         include: [
//           [
//             // Use plain SQL to get a count of all short books
//             sequelize.literal(
//               '(SELECT COUNT(*) FROM book WHERE pages BETWEEN 100 AND 300 AND book.reader_id = reader.id)'
//             ),
//             'shortBooks',
//           ],
//         ],
//       },
//     });
//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });