const router = require('express').Router();

const notesRoutes = require('./notesRoutes');

const userRoutes = require("./user-routes");

const homeRoutes = require("./home-routes");

router.use(notesRoutes);
router.use(userRoutes);
router.use(homeRoutes);

module.exports = router;