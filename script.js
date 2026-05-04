//your JS code here. If required.
function updateTimer() {
  const now = new Date();
  document.getElementById("timer").innerText = now.toString();
}

setInterval(updateTimer, 1000);

updateTimer();