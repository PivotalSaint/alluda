const router = require('express').Router();

const notesRoutes = require('./notesRoutes');

const userRoutes = require("./user-routes");

const homeRoutes = require("./home-routes");

const postRoutes = require('./post-routes');
//const getLaugh = require('./getLaugh');
router.use('/posts', postRoutes)
router.use('/notes', notesRoutes);
router.use('/users', userRoutes);
router.use('/login', homeRoutes);

module.exports = router;