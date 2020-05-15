// Require the necessary modules for this file.
const express = require('express');
//const authClass = require('../authentication/initPassport')();

// Setup a JobsServices so we can use it later on
class ImageRouter {
  constructor(imageService) {
    this.imageService = imageService;
  }

  // Binding the stuff to the stuff
  router() {
    let router = express.Router();
    router.get('/get-work', this.getWork.bind(this));
    router.get('/get-aboutme', this.getAboutMe.bind(this));
    // router.put('/edit-homepage', this.editHome.bind(this));
    // router.put('/edit-aboutme', this.editAboutMe.bind(this));
    return router;
  }
  getWork(req, res) {
    return this.imageService
      .showWork()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
  getAboutMe(req, res) {
    return this.imageService
      .showAboutMe()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = ImageRouter;
