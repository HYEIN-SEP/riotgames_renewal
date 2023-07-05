//팝업
let popup = document.querySelector(".popup"),
  closeBtn = popup.querySelector("#close"),
  dayCheck = popup.querySelector("#daycheck");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}
// setCookie('ABC','home',1);

function cookieCheck(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }
  if (!visited) {
    popup.setAttribute("open", "");
  }
}
cookieCheck("ABC");

closeBtn.addEventListener("click", () => {
  popup.removeAttribute("open");
  if (dayCheck.checked) {
    setCookie("ABC", "home", 1);
  } else {
    setCookie("ABC", "home", -1);
  }
});

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
  pager = slideWrapper.querySelector(".pager"),
  pagerHTML = "",
  currentSlideIdx = 0,
  prevBtn = slideWrapper.querySelector("#prev"),
  nextBtn = slideWrapper.querySelector("#next");

console.log(slideCount);

//슬라이드 만들기
if (slideCount > 1) {
  slides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
    pagerHTML += `<a href="">${idx}</a>`;
  });
}
pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll("a");

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

  for (let pg of pagerBtn) {
    pg.classList.remove("active");
  }
  pagerBtn[currentSlideIdx].classList.add("active");
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

pagerBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    moveSlide(idx);
  });
});

function autoslide() {
  timer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 5000);
}
autoslide();

slideWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
slideWrapper.addEventListener("mouseleave", () => {
  autoslide(timer);
});

//검색 모달
let magnify = document.querySelector(".magnify"),
  modal = document.querySelector(".modal"),
  mdbg = document.querySelector(".mdbg"),
  inputModal = modal.querySelector("input"),
  modalclose = modal.querySelector(".modalclose");

magnify.addEventListener("click", () => {
  modal.style.display = "block";
  inputModal.focus();
  nav.classList.remove("active");
});

mdbg.addEventListener("click", () => {
  modal.style.display = "none";
});

modalclose.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

//언어설정 드롭다운
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
    lang.classList.remove("active");
  });
}

//shrink -혜인
let header = document.querySelector("header"),
  topMenu = document.querySelector(".top_menu"),
  bottomMenu = document.querySelector(".bottom_menu"),
  logoa = document.querySelector(".logo a"),
  headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
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
  logoa.style.backgroundImage = "url(images/logo_shrink.png)";
  logoa.style.width = "55px";
  logoa.style.marginTop = "12.5px";
}

function switchImg2() {
  logoa.style.backgroundImage = "url(images/logo.png)";
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
let pheader = document.querySelectorAll(".panel-heading"); //단
let notice = document.querySelectorAll(".panel-notice"); //내용
let moreBtn = document.getElementById("btn-collapse"); //더보기버튼
let triangle = document.querySelector(".triangle");

notice.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let nb of notice) {
      nb.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

pheader.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let color of pheader) {
      color.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

triangle.addEventListener("click", () => {
  triangle.classList.toggle("active");
});
