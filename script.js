// --- Contador de visitas usando hits.seeyoufarm.com ---
async function loadCounter() {
  try {
    const res = await fetch("https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://emanuelmandarinifalero.github.io/Textoavozypdf/");
    document.getElementById("visits").innerText = "Online ✔";
  } catch (e) {
    document.getElementById("visits").innerText = "Error";
  }
}
loadCounter();

// --- Texto a voz ---
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const textEl = document.getElementById("textToRead");

let utterance;

playBtn.addEventListener("click", () => {
  const text = textEl.value.trim();
  if (!text) return;

  utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
});
