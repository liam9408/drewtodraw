const fs = require('fs');

const config = process.env;

class AttractionService {
  constructor(knex) {
    this.knex = knex;
  }
  showWork() {
    return new Promise(async (resolve, reject) => {
      let work = this.knex('images')
        .select('*')
        .where('id', '<', 11)
        .orderBy('id', 'asc');
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
          reject({ success: 0, error: 'About me image could not be grabbed' });
        });
    });
  }

  showHero() {
    return new Promise(async (resolve, reject) => {
      let aboutMe = this.knex('images').select('*').where('id', 12);
      aboutMe
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ success: 0, error: 'Hero image could not be grabbed' });
        });
    });
  }

  editPhoto(file, id, tag, year) {
    return new Promise(async (resolve, reject) => {
      let imagePath = '';
      if (file) {
        let fileType = file.file.name.split('.');
        fileType = fileType[fileType.length - 1];
        file.file.name = id + '.' + fileType;
        let files = fs.readdirSync('./public/assets/');
        let oldFile = '';
        files.forEach((name) => {
          let fileName = name.split('.')[0];
          if (id == fileName) {
            oldFile = name;
          }
        });
        fs.unlinkSync(`./public/assets/${oldFile}`);
        let move = (unit, newFileName) => {
          return new Promise((res, rej) => {
            unit.mv(`./public/assets/${newFileName}`);
          });
        };
        move(file.file, file.file.name);
        imagePath = `assets/${file.file.name}`;
      } else {
        let files = fs.readdirSync('./public/assets/');
        let oldFile = '';
        files.forEach((name) => {
          let fileName = name.split('.')[0];
          if (id == fileName) {
            oldFile = name;
          }
        });
        imagePath = `assets/${oldFile}`;
      }
      let updateInfo = this.knex('images')
        .where('id', id)
        .update({
          image_path: imagePath,
          description: tag,
          year: year,
        })
        .returning(['id', 'image_path', 'description', 'year']);
      if (tag === '' && year === '') {
        updateInfo = this.knex('images')
          .where('id', id)
          .update({
            image_path: imagePath,
          })
          .returning(['id', 'image_path', 'description', 'year']);
      } else if (year === '') {
        updateInfo = this.knex('images')
          .where('id', id)
          .update({
            image_path: imagePath,
            description: tag,
          })
          .returning(['id', 'image_path', 'description', 'year']);
      } else if (tag === '') {
        updateInfo = this.knex('images')
          .where('id', id)
          .update({
            image_path: imagePath,
            year: year,
          })
          .returning(['id', 'image_path', 'description', 'year']);
      }

      updateInfo
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ success: 0, error: 'Image could not be changed', msg: err });
        });
    });
  }
}

module.exports = AttractionService;
