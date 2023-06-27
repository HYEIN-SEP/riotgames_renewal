let bottommenu = document.querySelectorAll(".bottom_menu li"),
  nav = document.querySelector("nav");

for (let i of bottommenu) {
  i.addEventListener("mouseover", () => {
    nav.classList.add("active");
  });
  i.addEventListener("mouseout", () => {
    nav.classList.remove("active");
  });
}
