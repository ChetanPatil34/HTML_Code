// script.js
const mime = document.querySelector('.mime');

// A list of animation keyframes for mime gestures
const gestures = [
  { transform: 'translate(-50%, -50%) rotate(10deg)' },
  { transform: 'translate(-50%, -50%) rotate(-10deg)' },
  { transform: 'translate(-50%, -50%) rotate(0deg)' }
];

// Trapped-in-a-box effect
function trappedInBox() {
  mime.animate(gestures, {
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
  });
}

// Start the animation when the page loads
window.addEventListener('load', trappedInBox);
