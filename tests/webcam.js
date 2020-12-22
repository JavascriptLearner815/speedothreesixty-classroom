const webcam = document.getElementById("webcam")

function startWebcam() {
  navigator.getUserMedia(
    { webcam: {} },
    stream => webcam.srcObject = stream,
    err => console.error(err)
  )
}

startWebcam()
