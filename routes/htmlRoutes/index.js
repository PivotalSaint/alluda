const path = require('path');
const router = require('express').Router();

//note taker link in index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notesAssets/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notesAssets/notes.html'));
  });

  module.exports = router;