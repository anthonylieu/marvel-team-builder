const router = require('express').Router();
const teamRoute = require('./team')
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use("/teams", teamRoute);
module.exports = router;