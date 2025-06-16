function createConfetti() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.background = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71'][Math.floor(Math.random() * 4)];
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }
        setInterval(createConfetti, 200);