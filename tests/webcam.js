const webcam = document.getElementById("webcam")

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
      facingMode: "user"
    }
  }
)
  .then(stream => {
    webcam.srcObject = stream
  })
  .catch(err => {
    console.error(err)
  })
