const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  res.render("homepage", {
    posts,
    loggedIn: req.session.loggedIn,
    id: 1,
    post_url: "https://handlebarsjs.com/guide/",
    title: "Handlebars Docs",
    created_at: new Date(),
    vote_count: 10,
  });
});

module.exports = router;
