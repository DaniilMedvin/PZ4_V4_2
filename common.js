const fonts = ["Comic Sans MS", "Papyrus", "Jokerman", "Impact", "Brush Script MT", "Courier New"];
const rnd = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");

setInterval(() => {
  const result = document.getElementById("result");
  result.style.background = rnd();
  result.style.color = rnd();
  result.style.borderColor = rnd();
  result.querySelectorAll("p").forEach(p => {
    p.style.borderColor = rnd();
    p.style.background = rnd();
    p.style.color = rnd();
    p.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  });
  document.querySelector("h1").style.color = rnd();
}, 250);

function render(item) {
  document.getElementById("result").innerHTML =
    `<p>Назва: <b>${item.name}</b></p>` +
    `<p>Годин: <b>${item.hours}</b></p>` +
    `<p>Викладач: <b>${item.teacher}</b></p>`;
}

function load(url, parse) {
  fetch(url)
    .then(r => r.text())
    .then(text => render(parse(text)))
    .catch(() => {
      const input = document.getElementById("file");
      input.hidden = false;
      input.onchange = () => input.files[0].text().then(text => render(parse(text)));
    });
}

function maxHours(list) {
  return list.reduce((a, b) => (b.hours > a.hours ? b : a));
}
