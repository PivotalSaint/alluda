const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();
const session = require('express-session');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const apiRoutes = require("./controllers/api");

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));
const hbs = exphbs.create({helpers});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});