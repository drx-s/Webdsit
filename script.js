const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const result = document.getElementById('result');
const context = canvas.getContext('2d');
const downloadLink = document.getElementById('download-link');

// Ask for camera access
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(err => {
    alert("Camera access denied or not supported 😕");
    console.error(err);
  });

function capture() {
  // Set canvas size to video size
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw current video frame onto canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image URL
  const dataURL = canvas.toDataURL('image/png');

  // Show the captured image
  photo.src = dataURL;
  result.classList.remove('hidden');

  // Set download link
  downloadLink.href = dataURL;
}
