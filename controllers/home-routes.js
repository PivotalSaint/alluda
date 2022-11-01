const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/get-help', (req, res) => {
  res.render('get-help', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/media-page', (req, res) => {
  res.render('media-page', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/notes-page', (req, res) => {
  res.render('notes-page', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/about-us-page', (req, res) => {
  res.render('about-us-page', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/have-laugh-page', (req, res) => {
  res.render('have-laugh-page', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;