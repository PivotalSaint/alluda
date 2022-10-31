const path = require('path');
const router = require('express').Router();

//note taker link in index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/assets/about-us.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notesAssets/notes.html'));
});

router.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/assets/media.html'));
});

router.get('/get-help', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/assets/get-help.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/assets/login.html'));
  });
  
  router.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, '../apiRoutes/logout.js'));
  });

module.exports = router;
