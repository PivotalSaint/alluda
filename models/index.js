//File will import models and exports objects with their property

const router = require('express').Router();
const User = require('../models/userRoutes');

router.use(User);

module.exports = router;