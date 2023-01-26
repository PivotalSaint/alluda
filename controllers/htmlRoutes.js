const path = require('path');
const router = require('express').Router();
const sequelize = require('../config/connection');


//note taker link in index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/homepage.html'));
});

router.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/about-us.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});

router.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/media.html'));
});

router.get('/get-help', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/get-help.html'));
});

router.get('/have-laugh', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/assets/have-laugh.html'));
});

module.exports = router;