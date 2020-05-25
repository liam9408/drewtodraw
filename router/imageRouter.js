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
    router.post('/edit-work', this.editWork.bind(this));
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
  editWork(req, res) {
    console.log(req.body)
    console.log(req.files)
    // let data = JSON.parse(req.body.data);
    return this.imageService
      .editPhoto(req.files, req.body.id, req.body.tag, req.body.year)
      .then((data) => res.redirect('back'))
      .catch((err) => res.status(500).json(err));
    
  }
}

module.exports = ImageRouter;
