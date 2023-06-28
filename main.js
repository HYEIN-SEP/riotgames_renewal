let bottommenu = document.querySelectorAll(".bottom_menu li"),
  nav = document.querySelector("nav"),
  header = document.querySelector("header");
  console.log(header)

for (let i of bottommenu) {
  i.addEventListener("mouseover", () => {
    nav.classList.add("active");
  });
}
nav.addEventListener("mouseout", () => {
    nav.classList.remove("active");
  })

let slideWrapper = document.querySelector('.slide-wrapper'),
    slideContatiner = document
