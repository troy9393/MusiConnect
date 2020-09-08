if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const session = require("express-session");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");

const User = require("./models/users");
const Post = require("./models/posts");
require("./passport-config");

const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");
const profileRoutes = require("./routes/profileRoutes");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

app.set("view engine", "ejs");

//Connect to mongoDB
const dbURI =
  "mongodb+srv://user1:cisco@apdevmp.me8jb.mongodb.net/musiconnect?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(3000, function () {
      console.log("now listening to port 3000");
    })
  )
  .catch((err) => console.log(err));

//routes

//index route
app.get("/", function (req, res) {
  res.render("login.ejs");
});

//routes for authentication (login and register)
app.use(authRoutes);

//routes for the home page
app.use(homeRoutes);

app.use(profileRoutes);
