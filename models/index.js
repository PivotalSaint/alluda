//File will import models and exports objects with their property

const router = require('express').Router();
const User = require('./User');

router.use(User);

module.exports = router;