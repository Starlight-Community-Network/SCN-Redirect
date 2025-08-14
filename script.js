const countdownEl = document.getElementById('countdown');
const copyBtn = document.getElementById('copyBtn');
let count = 5;

// Countdown timer
function updateCountdown() {
    if (count > 0) {
        count--;
        countdownEl.textContent = count;
    } else {
         redirectToNewSite(); // Disabled for now
    }
}

// Redirect to new site
function redirectToNewSite() {
     window.location.href = 'https://starlightcommunity.network'; // Disabled for now
}

// Copy URL to clipboard
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('https://starlightcommunity.network');
        copyBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Copied!
        `;
        
        setTimeout(() => {
            copyBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Copy
            `;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});

// Start countdown
 const countdownInterval = setInterval(updateCountdown, 1000); // Disabled for now

// Allow manual redirect
document.querySelector('.manual-link').addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(countdownInterval); // No longer needed
    redirectToNewSite();
});

// Contact email functionality
document.querySelector('.contact-link').addEventListener('click', async (e) => {
    // Default mailto behavior is fine, but we can add tracking if needed
    console.log('Contact email clicked');
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add smooth scroll behavior for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});