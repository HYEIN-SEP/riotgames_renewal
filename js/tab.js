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
