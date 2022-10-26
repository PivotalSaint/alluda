const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// const session = require('express-session');
// const helpers = require('./utils/helpers');
// const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3350;
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// const { fail } = require("assert");

// const sess= {
//   secret: 'Super secret secret', 
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// const hbs = exphbs.create({ helpers });

// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
// app.set('view engine', 'handlebars');
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => console.log(`Now listening`));

});