let notice = document.querySelectorAll(".panel-notice");
let closeBtn = document.getElementById("btn-collapse");
let header = document.querySelectorAll(".panel-heading");

notice.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let nb of notice) {
      nb.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  for (let nb of notice) {
    nb.classList.remove("active");
  }
});

header.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let color of header) {
      color.style.background - image("#eb0029");
    }
    e.currentTarget.classList.remove("highlight-bg");
  });
});
