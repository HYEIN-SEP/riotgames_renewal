// 드롭다운-혜인
let bottommenu = document.querySelectorAll(".bottom_menu li"),
    nav = document.querySelector("nav"),
    header = document.querySelector("header");

for (let i of bottommenu) {
  i.addEventListener("mouseenter", () => {
    nav.classList.add("active");
  });
}
nav.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
});

//슬라이드-혜인
let slideWrapper = document.querySelector(".slide-wrapper"),
  slideContainer = slideWrapper.querySelector(".slide-container"),
  slides = slideContainer.querySelectorAll("li"),
  slideCount = slides.length,
  currentSlideIdx = 0,
  prevBtn = slideWrapper.querySelector("#prev"),
  nextBtn = slideWrapper.querySelector("#next");

if (slideCount > 1) {
  slides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
  });
}

function moveSlide(num) {
  slideContainer.style.left = `${-num * 100}%`;
  currentSlideIdx = num;

  if (currentSlideIdx === slideCount - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  if (currentSlideIdx === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

//   // for (let item of slides) {
//   //   item.classList.remove("active");
//   // }
//   // slides[currentSlideIdx].classList.add("active");
}
moveSlide(0);

nextBtn.addEventListener("click", () => {
  if (currentSlideIdx < slideCount - 1) {
    moveSlide(currentSlideIdx + 1);
  }
});
prevBtn.addEventListener("click", () => {
  if (currentSlideIdx > 0) {
    moveSlide(currentSlideIdx - 1);
  }
});

function autoslide() {
  timer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 3000);
}
autoslide();

//탭-민용
let tabMenu = document.querySelectorAll(".tab-menu li");
let tabContent = document.querySelectorAll(".tab-content > div");

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

//아코디언 -민용
let notice = document.querySelectorAll(".panel-notice");
let moreBtn = document.getElementById("btn-collapse");
let pheader = document.querySelectorAll(".panel-heading");

notice.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let nb of notice) {
      nb.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

moreBtn.addEventListener("click", () => {
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
