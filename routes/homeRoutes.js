const { Router } = require("express");
const homeController = require("../controllers/homeController");
const { ensureAuthenticated } = require("../auth");

const router = Router();

router.get("/home", ensureAuthenticated, homeController.home_get);

router.get("/profile", ensureAuthenticated, homeController.profile_get);

router.get("/playlists", ensureAuthenticated, homeController.playlists_get);

router.get("/search_tabs", ensureAuthenticated, homeController.search_get);

router.post("/search_tabs", ensureAuthenticated, homeController.search_post);

//router.post("/login", authController.login_post);

module.exports = router;
