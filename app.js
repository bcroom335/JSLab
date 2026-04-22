let stages = [];

async function load() {
  const res = await fetch("data.json");
  stages = await res.json();
  render(stages);
}

function render(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach(s => {
    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `
      <img src="${s.image}">
      <h3>${s.name}</h3>
    `;

    el.onclick = () => openModal(s);

    grid.appendChild(el);
  });
}

function openModal(stage) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-img").src = stage.image;
  document.getElementById("modal-title").innerText = stage.name;
}

document.getElementById("close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

document.getElementById("search").addEventListener("input", e => {
  const k = e.target.value.toLowerCase();
  render(stages.filter(s => s.name.toLowerCase().includes(k)));
});

load();
