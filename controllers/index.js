const router = require('express').Router();

const apiRoutes = require('../controllers/api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/assets/homepage.html'));
});

module.exports = router;