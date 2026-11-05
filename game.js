// Team profiles in roster order.
const players = [
  {
    name: "Victoria",
    fullName: "Yalan Peng",
    major: "Technology, Media, and Learning",
    focus: "Design of Learning Technology",
    image: document.getElementById("avatar").getAttribute("src"),
    alt: "Victoria as a flying cartoon superhero",
    fact: "I love dogs! My handle on every platform is “Responsible Dog Owner.”",
  },
  {
    name: "Sammi",
    major: "Design and UI/UX",
    image: document.getElementById("sammi-avatar").getAttribute("src"),
    alt: "Sammi as a flying cartoon superhero with wavy black hair, star details, and a red outfit",
    fact: "I'm allergic to mangoes, so when I order mango sticky rice at a Thai restaurant, I have to ask for it without the mango!",
  },
  {
    name: "June",
    major: "Instructional Design and Psychology",
    image: document.getElementById("june-avatar").getAttribute("src"),
    alt: "June as a flying cartoon superhero with brown hair, amber glasses, a color-block sweatshirt, and blue jeans",
    fact: "I sing anytime, anywhere—at any volume!",
  },
];

const $ = (id) => document.getElementById(id);
const slots = [...document.querySelectorAll(".slot")];
let active = 0;

function showFact(open) {
  $("fact").hidden = !open;
  $("reveal").setAttribute("aria-expanded", String(open));
  $("reveal").textContent = open ? "★  Hide fun fact" : "★  Reveal fun fact";
}

function select(index) {
  active = index;
  const player = players[index];
  slots.forEach((slot, i) => slot.setAttribute("aria-pressed", String(i === index)));
  $("number").textContent = `P${index + 1} ◆`;
  $("status").textContent = player ? "● HERO READY" : "○ SLOT OPEN";
  $("name").textContent = player?.name ?? `Player ${index + 1}`;
  $("fullname").textContent = player?.fullName ?? "";
  $("fullname").hidden = !player?.fullName;
  $("study").hidden = !player;
  $("pending").hidden = Boolean(player);
  $("avatar").hidden = !player?.image;
  $("empty").hidden = Boolean(player?.image);
  $("reveal").hidden = !player?.fact;
  if (player) {
    $("major").textContent = player.major;
    $("focus").textContent = player.focus ?? "";
    $("focus").hidden = !player.focus;
    if (player.image) $("avatar").src = player.image;
    $("avatar").alt = player.alt ?? `${player.name}'s avatar`;
    $("fact").textContent = player.fact ?? "";
  }
  showFact(false);
}

slots.forEach((slot, i) => {
  slot.lastChild.textContent = ` ${players[i]?.name ?? "Open slot"}`;
  slot.addEventListener("click", () => select(i));
});
document.querySelector(".signal").lastChild.textContent = ` ${players.filter(Boolean).length} / ${players.length} ONLINE`;
$("reveal").addEventListener("click", () => showFact($("fact").hidden));
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  select((active + (event.key === "ArrowRight" ? 1 : -1) + slots.length) % slots.length);
  slots[active].focus();
});
select(0);
