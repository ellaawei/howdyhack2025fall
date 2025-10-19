// stuff.js
import { skateboardImages, boardDesc } from './data.js';

const gallery = document.getElementById('gallery');

for (const key in skateboardImages) {
    const boardDiv = document.createElement('div');
    boardDiv.className = 'board';
    boardDiv.style.textAlign = 'center';
    boardDiv.style.margin = '20px';

    const img = document.createElement('img');
    img.src = skateboardImages[key];
    img.alt = key;
    img.style.width = '200px';
    img.style.borderRadius = '10px';

    const desc = document.createElement('p');
    desc.textContent = boardDesc[key] || '';

    boardDiv.appendChild(img);
    boardDiv.appendChild(desc);
    gallery.appendChild(boardDiv);
}
