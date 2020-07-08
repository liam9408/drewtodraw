
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_path: 'assets/1.jpg', description:'OFFICE', year:'2018'},
        {id: 2, image_path: 'assets/2.jpg', description:'KITCHEN', year:'2018'},
        {id: 3, image_path: 'assets/3.jpg', description:'DINING', year:'2020'},
        {id: 4, image_path: 'assets/4.jpg', description:'GARDEN', year:'2009'},
        {id: 5, image_path: 'assets/5.jpg', description:'LIVING ROOM', year:'2017'},
        {id: 6, image_path: 'assets/6.jpg', description:'LIVING ROOM', year:'2016'},
        {id: 7, image_path: 'assets/7.jpg', description:'OFFICE', year:'2018'},
        {id: 8, image_path: 'assets/8.jpg', description:'KITCHEN', year:'2015'},
        {id: 9, image_path: 'assets/9.jpg', description:'STAIRCASE', year:'2020'},
        {id: 10, image_path: 'assets/10.jpg', description:'OFFICE', year:'2017'},
        {id: 11, image_path: 'assets/11.jpg', description:'ABOUT ME', year:'2020'},
        {id: 12, image_path: 'assets/12.jpg', description:'HERO', year:'2020'},
      ]);
    });
};
