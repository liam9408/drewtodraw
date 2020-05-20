const fs = require('fs');

const config = process.env;

class AttractionService {
  constructor(knex) {
    this.knex = knex;
  }
  showWork() {
    return new Promise(async (resolve, reject) => {
      let work = this.knex('images').select('*').where('id', '<', 11);
      work
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ success: 0, error: 'homepage text could not be grabbed' });
        });
    });
  }
  showAboutMe() {
    return new Promise(async (resolve, reject) => {
      let aboutMe = this.knex('images').select('*').where('id', 11);
      aboutMe
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ success: 0, error: 'homepage text could not be grabbed' });
        });
    });
  }

  editPhoto(file, id, tag, year) {
    return new Promise(async (resolve, reject) => {
      let imagePath = '';
      if (file) {
        let fileType = file.image.name.split('.');
        fileType = fileType[fileType.length - 1];
        file.image.name = id + '.' + fileType;
        let files = fs.readdirSync('./public/assets/');
        let oldFile = '';
        files.forEach((name) => {
          if (name.includes(id)) {
            oldFile = name;
          }
        });
        fs.unlinkSync(`./public/assets/${oldFile}`);
        let move = (unit, newFileName) => {
          return new Promise((res, rej) => {
            unit.mv(`./public/assets/${newFileName}`);
          });
        };
        move(file.image, file.image.name);
        imagePath = `assets/${file.image.name}`;
      } else {
        let files = fs.readdirSync('./public/assets/');
        let oldFile = '';
        files.forEach((name) => {
          if (name.includes(id)) {
            oldFile = name;
          }
        });
        imagePath = `assets/${oldFile}`;
      }
      let updateInfo = this.knex('images').where('id', id).update({
        image_path: imagePath,
        description: tag,
        year: year,
      });
      if (tag === '' && year === '') {
        updateInfo = this.knex('images').where('id', id).update({
          image_path: imagePath,
        });
      } else if (year === '') {
        updateInfo = this.knex('images').where('id', id).update({
          image_path: imagePath,
          description: tag,
        });
      } else if (tag === '') {
        updateInfo = this.knex('images').where('id', id).update({
          image_path: imagePath,
          year: year,
        });
      }

      updateInfo
        .then(() => {
          resolve({ success: 1, msg: 'Image changed' });
        })
        .catch((err) => {
          reject({ success: 0, error: 'Image could not be changed', msg: err });
        });
    });
  }
}

module.exports = AttractionService;
