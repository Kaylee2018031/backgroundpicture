const form = document.getElementById("prompt-form");
const promptInput = document.getElementById("prompt");
const previewTitle = document.getElementById("preview-title");
const previewText = document.getElementById("preview-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const prompt = promptInput.value.trim();
  if (!prompt) return;

  previewTitle.textContent = "Generated from your prompt";
  previewText.textContent = prompt;
});
