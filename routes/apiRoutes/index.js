const router = require('express').Router();

const { route } = require('./notesRoutes');
const notesRoute = require('./notesRoutes');

const { route } = require("../../routes/apiRoutes/user-routes");
const userRoutes = require("../../routes/apiRoutes/user-routes");

const { route } = require("./homeRoutes");
const homeRoutes = require("../../routes/apiRoutes/home-routes");

const { route } = require('./')
//const { route }= require('./getLaugh');
//const getLaugh = require('./getLaugh');
router.use(notesRoute);

module.exports = router;