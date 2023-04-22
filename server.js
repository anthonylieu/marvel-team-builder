const express = require("express");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;

// Import User model
const User = require("./models/User");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Import routes
const homeRoutes = require("./controllers/home-routes.js");

// Set up routes
app.use("/", homeRoutes);
app.use(routes);

// Route for handling user registration
app.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add the logout route
app.post("/api/user-routes/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('An error occurred while logging out');
    } else {
      res.status(200).send('Logged out successfully');
    }
  });
});

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
