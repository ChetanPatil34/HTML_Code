const gameContainer = document.getElementById('gameContainer');
const basket = document.getElementById('basket');
const item = document.getElementById('item');

let basketPosition = 160;  // Initial position of the basket
let itemPosition = { top: 0, left: Math.random() * 370 };  // Random horizontal start position
let score = 0;
let isGameOver = false;

document.addEventListener('keydown', moveBasket);

function moveBasket(e) {
    if (isGameOver) return;

    if (e.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (e.key === 'ArrowRight' && basketPosition < 320) {
        basketPosition += 20;
    }

    basket.style.left = basketPosition + 'px';
}

function dropItem() {
    if (isGameOver) return;

    itemPosition.top += 5;
    item.style.top = itemPosition.top + 'px';
    item.style.left = itemPosition.left + 'px';

    if (itemPosition.top > 570) {  // When the item reaches the bottom
        if (itemPosition.left >= basketPosition && itemPosition.left <= basketPosition + 80) {
            score++;
            resetItem();
        } else {
            gameOver();
        }
    }
}

function resetItem() {
    itemPosition.top = 0;
    itemPosition.left = Math.random() * 370;
}

function gameOver() {
    isGameOver = true;
    alert(`Game Over! Your score: ${score}`);
}

setInterval(dropItem, 20);