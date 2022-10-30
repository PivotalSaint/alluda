const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  console.log(req.session);

  res.render("homepage", {
    id: 1,
    post_url: "https://handlebarsjs.com/guide/",
    title: "Handlebars Docs",
    user: {
      username: "test_user",
    },
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
