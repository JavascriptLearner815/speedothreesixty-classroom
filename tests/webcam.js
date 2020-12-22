const webcam = document.getElementById("webcam")

function startWebcam() {
  navigator.getUserMedia(
    { video: {} },
    stream => webcam.srcObject = stream,
    err => console.error(err)
  )
}

startWebcam()
