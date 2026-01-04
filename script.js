const pads = document.querySelectorAll(".pad");

function playSound(soundName) {
  const audio = new Audio(`assets/sounds/${soundName}.wav`);
  audio.currentTime = 0;
  audio.play();
}

function animate(key) {
  const pad = document.querySelector(`.pad[data-key="${key}"]`);
  if (!pad) return;

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 120);
}

// tiklama
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad.dataset.sound);
    animate(pad.dataset.key);
  });
});

// klavye
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const pad = document.querySelector(`.pad[data-key="${key}"]`);
  if (!pad) return;

  playSound(pad.dataset.sound);
  animate(key);
});
