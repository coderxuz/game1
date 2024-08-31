import "./index.scss";
const body = document.body;
let left: number = 180;
const fire = document.createElement("div");
window.addEventListener("keydown", (e) => {
  const inner = window.innerWidth;
  if (e.key === "Enter") {
    fire.classList.value = "fire";
    body.appendChild(fire);
    const int = setInterval(() => {
      fire.style.left = `${(left += 10)}px`;
      if (left > inner) {
        fire.remove();
        clearInterval(int);
        left = 180;
      }
    }, 1);
  }
});
setInterval(() => {
  const en = document.createElement("div");
  en.classList.value = "enemy";
  body.appendChild(en);
  let leftpx = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
  console.log(leftpx);
  en.style.left = `${leftpx}px`;
  setInterval(() => {
    if (left - leftpx >100) {
        fire.remove()
      en.remove();
    }
  }, 0.1);
}, 2000);