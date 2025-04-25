// Counter til construction.html

document.addEventListener("DOMContentLoaded", function () {
  const countDownDate = new Date("May 14, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "Siden er live!";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
      <h4 class="badge mx-1">${days} Days</h4>
      <h4 class="badge mx-1">${hours} Hours</h4>
      <h4 class="badge mx-1">${minutes} Minutes</h4>
      <h4 class="badge mx-1">${seconds} Seconds</h4>`;
  }

  updateCountdown(); 
  const timerInterval = setInterval(updateCountdown, 1000);
});
