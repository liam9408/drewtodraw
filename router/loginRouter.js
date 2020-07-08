//-------------- Setting up required packages
const passport = require('passport');


//-------------- Setting up routes
module.exports = express => {
  const router = express.Router();
  router.post(
    '/login',
    passport.authenticate('local-login', {
      successRedirect: '/edit',
      failureRedirect: '/login'
    })
  );

  router.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/edit',
      failureRedirect: '/login'
    })
  );


  return router;
};
