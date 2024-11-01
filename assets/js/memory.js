let data = [1, 2, 3, 4, 5, 6, 7, 8];

data = data.concat(data);
console.log(data);
data.sort(() => Math.random() - 0.5);
console.log(data);

for (const x of data) {
    console.log(x);
    document.querySelector('.game').innerHTML += `<div class="game-item">${x}</div>`;
}

function handleClick() {
    console.log(this);
}

const items = document.querySelectorAll('.game-item');

function handleItemClick() {
    this.classList.toggle('game-item-active');
}

for (const item of items) {
    item.addEventListener('click', handleItemClick);
}




document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('newGameBtn').addEventListener('click', newGame);

function restartGame() {
    const items = document.querySelectorAll('.game-item');
    items.forEach(item => {
        item.classList.remove('game-item-active', 'game-item-wrong');
    });
}

function newGame() {
    const items = document.querySelectorAll('.game-item');
    items.forEach(item => {
        item.classList.remove('game-item-active', 'game-item-wrong');
    });
}

