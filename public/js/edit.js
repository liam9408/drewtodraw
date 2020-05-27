$('.input').change((event) => {
  const id = event.target.id.split('upload')[1];
  const file = $(`#${event.target.id}`)[0].files[0];
  if (file) {
    var reader = new FileReader();
    const fileType = file.type.split('/')[0];
    if (fileType == 'image') {
      reader.addEventListener(
        'load',
        function () {
          $(`#img${id}`)[0].src = reader.result;
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }
});

$('.submit').click((event) => {
  event.preventDefault();
  const id = event.target.id;
  const file = $(`#upload${id}`)[0].files[0];
  if (file) {
    const fileType = file.type.split('/')[0];
    if (fileType == 'image') {
      $(`#${id}form`).submit();
    } else {
      alert('Can only upload image files.');
    }
  } else {
    $(`#${id}form`).submit();
  }
});

$('.homeTextForm').submit(async (event) => {
  event.preventDefault();
  const text = $('#homeText').val();
  $('#homeText').val('');
  await $.ajax({
    url: '/texts/edit-homepage',
    type: 'POST',
    data: {
      content: text,
    },
    success: function () {
      var toast = document.getElementById('snackbar');
      toast.innerHTML = 'Home Page Text Modified.';
      toast.className = 'show';
      setTimeout(function () {
        toast.className = toast.className.replace('show', '');
      }, 3000);
    },
    error: function (request, msg, error) {
      console.log('failed');
    },
  });
});

$('.aboutTextForm').submit(async (event) => {
  event.preventDefault();
  const text = $('#aboutText').val();
  $('#aboutText').val('');
  await $.ajax({
    url: '/texts/edit-aboutme',
    type: 'POST',
    data: {
      content: text,
    },
    success: function () {
      var toast = document.getElementById('snackbar');
      toast.innerHTML = 'About Me Text Modified.';
      toast.className = 'show';
      setTimeout(function () {
        toast.className = toast.className.replace('show', '');
      }, 3000);
    },
    error: function (request, msg, error) {
      console.log('failed');
    },
  });
});
