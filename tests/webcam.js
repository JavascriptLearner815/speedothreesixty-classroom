const webcam = document.getElementById("webcam")

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {}
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.getUserMedia
    if (!getUserMedia) {
      return Promise.reject(new Error("getUserMedia is not implemented in this browser"))
    }
    return new Promise(function(resolve, reject)) {
      getUserMedia.call(navigator, constraints, resolve, reject)
    }
  }
}

navigator.mediaDevices.getUserMedia(
  {
    audio: false,
    video: {
      width: {
        min: 240,
        ideal: 800,
        max: 2098
      },
      height: {
        min: 240,
        ideal: 650,
        max: 2098
      },
      frameRate: {
        min: 1,
        ideal: 60,
        max: 180
      },
      facingMode: "user"
    }
  }
)
  .then(function(stream) {
    addStream(stream)
    webcam.onloadedmetadata = function(e) {
      video.play()
    }
  })
  .catch(function(err) {
    console.error(`${err.name}: ${err.message}`)
  })

  
function addStream(stream) {
  if ("srcObject" in webcam) {
    return webcam.srcObject = stream
  }
  webcam.src = window.URL.createObjectURL(stream)
}
