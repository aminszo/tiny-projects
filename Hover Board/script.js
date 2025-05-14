const ITEMS = 700;

const container = document.getElementById("items-container");

for (let index = 0; index < ITEMS; index++) {
    const div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}