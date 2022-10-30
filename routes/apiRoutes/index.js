const router = require('express').Router();

const notesRoutes = require('./notesRoutes');

const userRoutes = require("./userRoutes");

const homeRoutes = require("./homeRoutes");

const postRoutes = require('./postRoutes');
//const getLaugh = require('./getLaugh');
router.use('/posts', postRoutes)
router.use('/notes', notesRoutes);
router.use('/users', userRoutes);
router.use('/', homeRoutes);

module.exports = router;