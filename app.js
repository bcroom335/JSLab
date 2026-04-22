let stages = [];

async function loadData() {
  const res = await fetch("data.json");
  stages = await res.json();
  render(stages);
}

function render(data) {
  const container = document.getElementById("stage-list");
  container.innerHTML = "";

  data.forEach(stage => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${stage.image}">
      <h3>${stage.name}</h3>
    `;

    card.onclick = () => {
      alert(stage.name);
    };

    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();

  const filtered = stages.filter(s =>
    s.name.toLowerCase().includes(keyword)
  );

  render(filtered);
});

loadData();