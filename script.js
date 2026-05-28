const form = document.getElementById("prompt-form");
const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generate-btn");
const statusEl = document.getElementById("status");
const gallery = document.getElementById("gallery");

function createImageUrl(prompt) {
  const seed = Math.floor(Math.random() * 1_000_000);
  const encoded = encodeURIComponent(`${prompt}, high quality, detailed`);
  return `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=1024&seed=${seed}`;
}

function addToGallery(prompt, url) {
  const item = document.createElement("figure");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = url;
  img.alt = prompt;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = prompt;

  item.append(img, caption);
  gallery.prepend(item);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const prompt = promptInput.value.trim();
  if (!prompt) return;

  generateBtn.disabled = true;
  statusEl.textContent = "Generating image...";

  const imageUrl = createImageUrl(prompt);
  const probe = new Image();

  probe.onload = () => {
    addToGallery(prompt, imageUrl);
    statusEl.textContent = "Image generated and added to gallery.";
    generateBtn.disabled = false;
  };

  probe.onerror = () => {
    statusEl.textContent = "Could not generate image right now. Please try again.";
    generateBtn.disabled = false;
  };

  probe.src = imageUrl;
});
