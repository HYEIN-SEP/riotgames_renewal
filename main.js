let bottommenu = document.querySelectorAll(".bottom_menu li"),
  nav = document.querySelector("nav"),
  navList = document.querySelectorAll("nav ul");

for (let i of bottommenu) {
  i.addEventListener("mouseover", () => {
    nav.classList.add("active");
  });
}

for (let i of navList) {
  i.addEventListener("mouseout", () => {
    nav.classList.remove("active");
  });
}
