const router = require('express').Router();
const { route } = require('./notesRoutes');
//const { route }= require('./getLaugh');

//const getLaugh = require('./getLaugh');

const notesRoute = require('./notesRoutes');

router.use(notesRoute);

module.exports = router;