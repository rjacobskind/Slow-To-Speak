
//below puts the recording element into our app

//possibly trying to do below before document is fully loaded
var player = document.getElementById('player');

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
  .then(stream => {
    if (window.URL) {
      player.src = window.URL.createObjectURL(stream);
    } else {
      player.src = stream;
    }
  })
  .catch(console.error.bind(console))
