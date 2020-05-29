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

$('.submit').click(async (event) => {
  event.preventDefault();
  const id = event.target.id;
  let formData = new FormData();
  const tag = $(`#desc${id}`).val();
  const year = $(`#year${id}`).val();
  const file = $(`#upload${id}`)[0].files[0];
  formData.append('id', id);
  formData.append('year', year);
  formData.append('tag', tag);
  formData.append('file', file);
  if (file) {
    const fileType = file.type.split('/')[0];
    if (fileType == 'image') {
       $.ajax({
        url: '/images/edit-work',
        data: formData,
        type: 'POST',
        processData: false,
        contentType: false,
        success: function () {
          $(`#desc${id}`).val('');
          $(`#year${id}`).val('');
          $(`#upload${id}`).val('');
          if (tag){
            $(`#desc${id}`).attr('placeholder',tag)
          }
          if (year){
            $(`#year${id}`).attr('placeholder',year)
          }
          var toast = document.getElementById('snackbar');
          toast.innerHTML = `Photo ${id} has been modified!`;
          toast.className = 'show';
          setTimeout(function () {
            toast.className = toast.className.replace('show', '');
          }, 3000);
        },
        error: function () {
          var toast = document.getElementById('snackbar');
          toast.innerHTML = `Error: Could not update photo ${id}.`;
          toast.className = 'error';
          setTimeout(function () {
            toast.className = toast.className.replace('error', '');
          }, 3000);
        },
      });
    } else {
      alert('Can only upload image files.');
    }
  } else {
    $.ajax({
        url: '/images/edit-work',
        data: formData,
        type: 'POST',
        processData: false,
        contentType: false,
        success: function () {
          $(`#desc${id}`).val('');
          $(`#year${id}`).val('');
          $(`#upload${id}`).val('');
          if (tag){
            $(`#desc${id}`).attr('placeholder',tag)
          }
          if (year){
            $(`#year${id}`).attr('placeholder',year)
          }
          var toast = document.getElementById('snackbar');
          toast.innerHTML = `Photo ${id} has been modified!`;
          toast.className = 'show';
          setTimeout(function () {
            toast.className = toast.className.replace('show', '');
          }, 3000);
        },
        error: function () {
          var toast = document.getElementById('snackbar');
          toast.innerHTML = `Error: Could not update photo ${id}.`;
          toast.className = 'error';
          setTimeout(function () {
            toast.className = toast.className.replace('error', '');
          }, 3000);
        },
      });
  }
});

$('.homeTextForm').submit(async (event) => {
  event.preventDefault();
  const text = $('#homeText').val();
  await $.ajax({
    url: '/texts/edit-homepage',
    type: 'POST',
    data: {
      content: text,
    },
    success: function () {
      $('#homeText').val('');
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
  await $.ajax({
    url: '/texts/edit-aboutme',
    type: 'POST',
    data: {
      content: text,
    },
    success: function () {
      $('#aboutText').val('');
      var toast = document.getElementById('snackbar');
      toast.innerHTML = 'About Me Text Modified.';
      toast.className = 'show';
      setTimeout(function () {
        toast.className = toast.className.replace('show', '');
      }, 3000);
    },
    error: function () {
      var toast = document.getElementById('snackbar');
      toast.innerHTML =
        'Error: Something went wrong trying to update the About Me.';
      toast.className = 'error';
      setTimeout(function () {
        toast.className = toast.className.replace('error', '');
      }, 3000);
    },
  });
});
