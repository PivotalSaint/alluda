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

then((dbPostData) => {
  if (!dbPostData) {
    res.status(404).json({ message: "No post found with this id" });
    return;
  }

  // serialize the data
  const post = dbPostData.get({ plain: true });

  // pass data to template
  res.render("single-post", {
    post,
    loggedIn: req.session.loggedIn,
  });
}).catch((err) => {
  console.log(err);
  res.status(500).json(err);
});

module.exports = router;
