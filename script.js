function startPrank() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("prank-screen").classList.remove("hidden");
}

function playSound() {
  const audio = document.getElementById("prank-sound");
  audio.play();
}

function confettiStorm() {
  alert("Confetti mode activated! (pretend there's confetti flying!)");
}