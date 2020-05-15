const fs = require('fs');

const config = process.env;

class AttractionService {
  constructor(knex) {
    this.knex = knex;
  }
  showWork(){
    return new Promise(async (resolve, reject) => {
        let work = this.knex('images')
          .select('*')
          .where('id','<', 11);
        work
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            reject({ success: 0, error: 'homepage text could not be grabbed' });
          });
      });
  }
  showAboutMe(){
    return new Promise(async (resolve, reject) => {
        let aboutMe = this.knex('images')
          .select('*')
          .where('id', 11);
        aboutMe
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            reject({ success: 0, error: 'homepage text could not be grabbed' });
          });
      });
  }
  
}

module.exports = AttractionService;
