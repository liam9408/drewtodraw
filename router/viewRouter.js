module.exports = (express) => {
  const router = express.Router();

  // // define middleware
  // function isLoggedIn(req, res, next) {
  //   // check if user is currently logged in
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   // if not logged in, redirect to the landing page
  //   res.render("login");
  // }

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

  router.get("/edit", (req, res) => {
    res.render("edit");
  });

  return router;
};
