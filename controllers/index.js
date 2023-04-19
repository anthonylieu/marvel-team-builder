const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const characterSheet = require("./character-sheet");
router.use("/character", characterSheet);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
