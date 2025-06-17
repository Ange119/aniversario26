// function createConfetti() {
//     const confetti = document.createElement('div');
//     confetti.className = 'confetti';
//     confetti.style.left = Math.random() * window.innerWidth + 'px';
//     confetti.style.background = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71'][Math.floor(Math.random() * 4)];
//     document.body.appendChild(confetti);
//     setTimeout(() => confetti.remove(), 4000);
// }
// setInterval(createConfetti, 200);

var defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8']
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ['star']
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ['circle']
      });
    }

    // Lanzar varias veces seguidas para dar efecto de explosión
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);