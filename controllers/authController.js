const User = require("../models/users");
const bcrypt = require("bcrypt");

const initializePassport = require("../passport-config");
const passport = require("passport");
initializePassport(passport, (username) => {
  return User.find((user) => user.username == username);
});

//REGISTER.GET
module.exports.register_get = (req, res) => {
  res.render("register.ejs");
};

//LOGIN.GET
module.exports.login_get = (req, res) => {
  res.render("login.ejs");
};

//LOGOUT.GET
module.exports.logout_get = (req, res) => {
  req.logout();
  res.redirect("/login");
};

//REGISTER.POST
module.exports.register_post = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: password,
    });
    user
      .save()
      .then((result) => {
        console.log("user saved");
        res.send(result);
      })
      .catch((err) => console.log(err));
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

//LOGIN.POST
module.exports.login_post = passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login",
  failureFlash: true,
});
