// Require the necessary modules for this file.
const express = require('express');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.sendStatus(403);
}

class ImageRouter {
  constructor(imageService) {
    this.imageService = imageService;
  }


  router() {
    let router = express.Router();
    router.get('/get-work', this.getWork.bind(this));
    router.get('/get-aboutme', this.getAboutMe.bind(this));
    router.post('/edit-work', isLoggedIn, this.editWork.bind(this));
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
  editWork(req, res) {
    return this.imageService
      .editPhoto(req.files, req.body.id, req.body.tag, req.body.year)
      .then((data) => res.status(204).send())
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = ImageRouter;
