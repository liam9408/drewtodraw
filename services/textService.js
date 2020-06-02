const fs = require('fs');

const config = process.env;

class AttractionService {
  constructor(knex) {
    this.knex = knex;
  }
  showHome() {
    return new Promise(async (resolve, reject) => {
      let homeInfo = this.knex('texts').select('id','content').where('id', '<', 3).orderBy('id','ASC');
      homeInfo
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
      let aboutInfo = this.knex('texts').select('content').where('id', 3);
      aboutInfo
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ success: 0, error: 'about me text could not be grabbed' });
        });
    });
  }
  editHome(contentTop, contentBottom) {
    return new Promise(async (resolve, reject) => {
      let editTop = this.knex('texts')
        .where('id', 1)
        .update('content', contentTop);
      let editBottom = this.knex('texts')
        .where('id', 2)
        .update('content', contentBottom);
      editTop
        .then(() => {
          editBottom.then(() => {
            resolve({ success: 1, success: 'home page updated' });
          });
        })
        .catch((err) => {
          reject({ success: 0, error: 'home page could not be updated' });
        });
    });
  }

  editAboutMe(content) {
    return new Promise(async (resolve, reject) => {
      let aboutInfo = this.knex('texts')
        .where('id', 3)
        .update('content', content);
      aboutInfo
        .then(() => {
          resolve({ success: 1, success: 'about me page updated' });
        })
        .catch((err) => {
          reject({ success: 0, error: 'about me page could not be updated' });
        });
    });
  }
}

module.exports = AttractionService;
