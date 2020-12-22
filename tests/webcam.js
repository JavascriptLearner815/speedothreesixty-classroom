const webcam = document.getElementById("webcam")

navigator.mediaDevices.getUserMedia(
  {
    audio: false,
    video: {
      width: {
        min: 360,
        ideal: 720,
        max: 1920
      },
      height: {
        min: 360,
        ideal: 560,
        max: 1920
      }
    }
  }
)
  .then(stream => {
    webcam.srcObject = stream
  })
  .catch(err => {
    console.error(err)
  })
