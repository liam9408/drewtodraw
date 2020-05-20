//-------------- Setting up required packages
const passport = require('passport');
const path = require('path')


//-------------- Setting up routes
module.exports = express => {
  const router = express.Router();
//   function isLoggedIn(req, res, next) {
//     //using passport to see if user is logged in.
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login'); 
//   }

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
//double check ERROR URL
//   router.get('/error', (req, res) => {
//     res.send('You are not logged in!');
//   });

  return router;
};
