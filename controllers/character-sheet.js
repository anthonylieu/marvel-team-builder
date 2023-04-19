const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.render("character-sheet")
  });
  module.exports = router;