const NOTIFY_EMAIL = "zdemon2002@gmail.com";

const heartsEl = document.querySelector(".hearts");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const btns = document.getElementById("btns");
const done = document.getElementById("done");

function sendNotifyEmail() {
  return fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: "She said YES! 💕",
      message: `She clicked Yes on your apology website!\n\nTime: ${new Date().toLocaleString()}`,
      _captcha: "false",
      _template: "table",
    }),
  });
}

["♥", "💕", "✨", "💙"].forEach((s, i) => {
  for (let j = 0; j < 5; j++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = s;
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDelay = `${i * 2 + j * 1.5}s`;
    h.style.animationDuration = `${6 + Math.random() * 6}s`;
    heartsEl.appendChild(h);
  }
});

const noTexts = ["hm...", "sure? 🥺", "pretty please", "plssss"];
let clicks = 0;

noBtn.addEventListener("click", () => {
  clicks++;
  noBtn.textContent = noTexts[Math.min(clicks, noTexts.length - 1)];
  noBtn.style.position = "absolute";
  noBtn.style.left = `${Math.random() * 120}px`;
  noBtn.style.top = `${Math.random() * 40}px`;
  if (clicks >= 3) yesBtn.style.transform = "scale(1.12)";
});

yesBtn.addEventListener("click", () => {
  btns.style.display = "none";
  done.classList.remove("hidden");
  sendNotifyEmail().catch(() => {});
});
