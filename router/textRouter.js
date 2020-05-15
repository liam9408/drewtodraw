// Require the necessary modules for this file.
const express = require('express');
//const authClass = require('../authentication/initPassport')();

// Setup a JobsServices so we can use it later on
class TextRouter {
  constructor(textService) {
    this.textService = textService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    router.get('/get-homepage', this.getHome.bind(this));
    router.get('/get-aboutme', this.getAboutMe.bind(this));
    router.put('/edit-homepage', this.editHome.bind(this));
    router.put('/edit-aboutme', this.editAboutMe.bind(this));
    return router;
  }
  getHome(req, res) {
    return this.textService
      .showHome()
      .then((data) => res.json(data[0].content))
      .catch((err) => res.status(500).json(err));
  }
  getAboutMe(req, res) {
    return this.textService
      .showAboutMe()
      .then((data) => res.json(data[0].content))
      .catch((err) => res.status(500).json(err));
  }
  editHome(req, res) {
    return this.textService
      .editHome(req.body.content)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
  editAboutMe(req, res) {
    return this.textService
      .editAboutMe(req.body.content)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = TextRouter;
