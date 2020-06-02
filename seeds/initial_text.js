exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('texts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([
        {
          id: 1,
          page_location: 'Home Page Top',
          content: 'Interior Design',
        },
        {
          id: 2,
          page_location: 'Home Page Bottom',
          content: 'In Hong Kong',
        },
        {
          id: 3,
          page_location: 'About Me',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis augue velit. Fusce nec rutrum dolor. Sed a hendrerit est, non suscipit leo. Fusce et mattis mi, nec ultrices neque. Sed rutrum quis est nec dapibus. Proin eget neque vitae urna commodo sagittis non non lacus. Aenean dictum erat vel eros porta congue. Vivamus lacus massa, malesuada at efficitur et, maximus eget nibh. Aenean imperdiet felis nec magna malesuada iaculis. Nullam ornare semper tortor, quis blandit nisi maximus at. Phasellus quis lobortis ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae quam felis. Ut condimentum ornare varius. Etiam mollis ultricies massa et ullamcorper.',
        },
      ]);
    });
};
