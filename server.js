const express = require('express');
const routes = require('./routes/api/indexa.js');
const path = require('path');
const sequelize = require('./config/connection');

const session = require('express-session');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3306;

// imports connection with sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const sess= {
  secret: 'Super secret secret', 
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const hbs = exphbs.create({ helpers });

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.set('view engine', 'handlebars');
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Establishes connection to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});