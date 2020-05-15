
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_path: 'assets/1.jpg', description:'Office', year:'2018'},
        {id: 2, image_path: 'assets/2.jpg', description:'Kitchen', year:'2018'},
        {id: 3, image_path: 'assets/3.jpg', description:'Dining', year:'2020'},
        {id: 4, image_path: 'assets/4.jpg', description:'Garden', year:'2009'},
        {id: 5, image_path: 'assets/5.jpg', description:'Living Room', year:'2017'},
        {id: 6, image_path: 'assets/6.jpg', description:'Living Room', year:'2016'},
        {id: 7, image_path: 'assets/7.jpg', description:'Office', year:'2018'},
        {id: 8, image_path: 'assets/8.jpg', description:'Kitchen', year:'2015'},
        {id: 9, image_path: 'assets/9.jpg', description:'Staircase', year:'2020'},
        {id: 10, image_path: 'assets/10.jpg', description:'Office', year:'2017'},
        {id: 11, image_path: 'assets/headshot.jpg', description:'About Me', year:'2020'},
      ]);
    });
};
