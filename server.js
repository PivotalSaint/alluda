const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const helpers = require('./utils/helpers');


const PORT = process.env.PORT || 3306;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
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

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.set('view engine', 'handlebars');
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



sequelize.sync({ force: true }).then(() => {

app.listen(PORT, () => console.log(`Now listening`));

});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});