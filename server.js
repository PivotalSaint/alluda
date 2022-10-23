// const express = require("express");
// const path = require('path');
// const exphbs = require('express-handlbars');
// const routes = require('./routes');
// const sequelize = require('./config/connection');

// const PORT = process.env.PORT || 3350;

// const hbs = exphbs.create({});
// const app = express();
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

// app.engine('handlebars', hbs.engine);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
// app.set('view engine', 'handlebars');
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);


// sequelize.sync({ force: false }).then(() => {

//   app.listen(PORT, () => console.log(`Now listening`));

// });

const express = require("express");

const PORT = process.env.PORT || 3350;

const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});