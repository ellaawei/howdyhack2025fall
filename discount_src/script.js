import { skateboardImages, boardDesc } from "./data.js";

console.log("Script loaded");

const gallery = document.getElementById("gallery");

for (const [key, imageUrl] of Object.entries(skateboardImages)) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = key;

  const title = document.createElement("h3");
  title.textContent = key.replace(/_/g, " ");

  const desc = document.createElement("p");
  desc.textContent = boardDesc[key] || "No description available.";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  gallery.appendChild(card);
}

