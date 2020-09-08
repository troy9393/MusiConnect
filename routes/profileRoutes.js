const { Router } = require("express");
const profileController = require("../controllers/profileController");
const { ensureAuthenticated } = require("../auth");

const router = Router();

router.get(
  "/profile/following",
  ensureAuthenticated,
  profileController.following_get
);

router.get(
  "/profile/followers",
  ensureAuthenticated,
  profileController.followers_get
);

//router.post("/login", authController.login_post);

module.exports = router;
