const User = require("../models/users");

module.exports.home_get = (req, res) => {
  res.render("home.ejs");
};

module.exports.profile_get = (req, res) => {
  res.render("profile.ejs");
};

module.exports.playlists_get = (req, res) => {
  res.render("playlist.ejs");
};

module.exports.search_get = (req, res) => {
  res.render("search_tab.ejs");
};

module.exports.search_post = (req, res) => {
  res.render("search_tab.ejs");
};
