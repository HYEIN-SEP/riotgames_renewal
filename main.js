// 드롭다운-혜인
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



//아코디언 -민용
let notice = document.querySelectorAll(".panel-notice");
let closeBtn = document.getElementById("btn-collapse");
let pheader = document.querySelectorAll(".panel-heading");

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

pheader.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let color of pheader) {
      color.style.background - image("#eb0029");
    }
    e.currentTarget.classList.remove("highlight-bg");
  });
});

//탭-민용
let tabMenu = document.querySelectorAll(".tab-menu li");
let tabContent = document.querySelectorAll("#tab-content > div");

tabMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (let menu of tabMenu) {
      menu.classList.remove("active");
    }
    e.currentTarget.classList.add("active");

    let targetNum = e.currentTarget.getAttribute("data-num");

    for (let content of tabContent) {
      content.style.display = "none";
    }

    tabContent[targetNum].style.display = "block";
  });
});

