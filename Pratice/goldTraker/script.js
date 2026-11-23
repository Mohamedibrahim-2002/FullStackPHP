function updateClock() {
  const now = new Date();
  // Formats the date and time according to the user's local settings
  document.getElementById("liveClock").textContent = now.toLocaleString();
}

// Run immediately on page load so there is no 1-second delay
updateClock();

// Update every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
