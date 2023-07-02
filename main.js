// 드롭다운-혜인
let bottommenu = document.querySelectorAll(".bottom_menu li"),
  nav = document.querySelector("nav");

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

//모달-혜인
let magnify = document.querySelector(".magnify"),
  modal = document.querySelector(".modal");

magnify.addEventListener("click", (e) => {
  modal.style.display = "block";
  nav.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  e.target.style.display = "none";
});

//언어설정 -혜인
let earth = document.querySelector(".earth"),
  lang = document.querySelector(".lang"),
  langs = document.querySelectorAll(".lang ul li a");

earth.addEventListener("click", (e) => {
  lang.classList.toggle("active");
  nav.classList.remove("active");
});

for (item of langs) {
  item.addEventListener("click", (e) => {
    for (item of langs) {
      item.style.color = "#9a9a9a";
    }
    e.target.style.color = "#000";
  });
}

//shrink -혜인
let header = document.querySelector("header"),
  topMenu = document.querySelector(".top_menu"),
  bottomMenu = document.querySelector(".bottom_menu"),
  logoa = document.querySelector(".logo a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shrink");
    topMenu.classList.add("shrink");
    bottomMenu.classList.add("shrink");
    switchImg1();
  } else {
    header.classList.remove("shrink");
    topMenu.classList.remove("shrink");
    bottomMenu.classList.remove("shrink");
    switchImg2();
  }
});

function switchImg1() {
  logoa.style.backgroundImage = "url(/images/logo_shrink.png)";
  logoa.style.width = "55px";
  logoa.style.marginTop = "12.5px";
}

function switchImg2() {
  logoa.style.backgroundImage = "url(/images/logo.png)";
  logoa.style.width = "196px";
  logoa.style.marginTop = "42.5px";
}

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
