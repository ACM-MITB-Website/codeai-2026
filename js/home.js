
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initCountdownTimer();
});

function initTypingEffect() {
    const text = '2026';
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    let currentIndex = 0;
    let isDeleting = false;
    let pauseCounter = 0;

    setInterval(() => {
        if (pauseCounter > 0) {
            pauseCounter--;
            return;
        }

        if (isDeleting) {
            if (currentIndex > 0) {
                currentIndex--;
                typingElement.textContent = text.slice(0, currentIndex);
            } else {
                isDeleting = false;
                pauseCounter = 5; // Pause before typing again
            }
        } else {
            if (currentIndex < text.length) {
                currentIndex++;
                typingElement.textContent = text.slice(0, currentIndex);
            } else {
                isDeleting = true;
                pauseCounter = 10; // Pause when full
            }
        }
    }, 100);
}

function initCountdownTimer() {
    const eventDate = new Date('2026-07-17T12:01:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimerValue('days', days);
        setTimerValue('hours', hours);
        setTimerValue('minutes', minutes);
        setTimerValue('seconds', seconds);
    }

    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

function setTimerValue(id, value) {
    const el = document.getElementById(`timer-${id}`);
    if (el) {
        el.textContent = String(value > 0 ? value : 0).padStart(2, '0');
    }
}
