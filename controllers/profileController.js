const User = require("../models/users");

module.exports.followers_get = (req, res) => {
  res.render("followers.ejs");
};

module.exports.following_get = (req, res) => {
  res.render("following.ejs");
};
