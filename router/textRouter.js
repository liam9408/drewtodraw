// Require the necessary modules for this file.
const express = require('express');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.sendStatus(403);
}
class TextRouter {
  constructor(textService) {
    this.textService = textService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    router.get('/get-homepage', this.getHome.bind(this));
    router.get('/get-aboutme', this.getAboutMe.bind(this));
    router.post('/edit-homepage', isLoggedIn, this.editHome.bind(this));
    router.post('/edit-aboutme', isLoggedIn, this.editAboutMe.bind(this));
    return router;
  }
  getHome(req, res) {
    return this.textService
      .showHome()
      .then((data) => res.json(data))
      .catch((err) => res.status(500));
  }
  getAboutMe(req, res) {
    return this.textService
      .showAboutMe()
      .then((data) => res.json(data[0].content))
      .catch((err) => res.status(500));
  }
  editHome(req, res) {
    return this.textService
      .editHome(req.body.firstLine, req.body.secondLine)
      .then(() => res.status(204).send())
      .catch((err) => res.status(500));
  }
  editAboutMe(req, res) {
    return this.textService
      .editAboutMe(req.body.content)
      .then(() => res.status(204).send())
      .catch((err) => res.status(500));
  }
}

module.exports = TextRouter;
