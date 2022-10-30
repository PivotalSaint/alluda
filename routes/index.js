const router = require("express").Router();

const htmlRoutes = require('../routes/htmlRoutes');
const apiRoutes = require('../routes/apiRoutes');

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
