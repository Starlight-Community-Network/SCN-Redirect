const countdownEl = document.getElementById('countdown');
const progressFill = document.getElementById('progressFill');

let timeLeft = 10;
const totalTime = timeLeft;

function updateCountdown() {
    if (timeLeft <= 0) {
        // Redirect to fallback
        window.location.href = 'https://fallback.starlightcommunity.network';
        return;
    }
    
    countdownEl.textContent = timeLeft;
    
    const progress = ((totalTime - timeLeft) / totalTime) * 100;
    progressFill.style.width = `${progress}%`;
    
    timeLeft--;
}

// Initial update
updateCountdown();

// Update every second
const interval = setInterval(updateCountdown, 1000);

// Allow manual redirect
document.querySelector('.fallback-link').addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(interval);
    window.location.href = e.target.href;
});

