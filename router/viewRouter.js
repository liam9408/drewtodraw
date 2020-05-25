
//-------------- Setting up required packages
const path = require('path');
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);

//-------------- Setting up required services
const ImageService = require('../services/imageService');
const imageService = new ImageService(knex);

module.exports = (express) => {
  const router = express.Router();

  // // define middleware
  function isLoggedIn(req, res, next) {
    // check if user is currently logged in
    if (req.isAuthenticated()) {
      return next();
    }
    // if not logged in, redirect to the landing page
    res.render("login");
  }

  router.get("/", (req, res) => {
    res.render("work");
  });

  router.get("/about", (req, res) => {
    res.render("about");
  });

  router.get("/contact", (req, res) => {
    res.render("contact");
  });

  router.get("/login", (req, res) => {
    res.render("login");
  });

  router.get("/edit",isLoggedIn, async (req, res) => {
    let workImages = await imageService.showWork()
    let aboutMeImage = await imageService.showAboutMe()
    res.render("edit",{
      workImages: workImages,
      aboutMeImage: aboutMeImage,
    });
  });

  return router;
};
