// animation
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".main-header");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("fixed-header");
        } else {
          stick.classList.remove("fixed-header");
        }
      }
    }
  });
};

export const sidebarClick = () => {
  const buttons = document.querySelectorAll(".menu-sidebar button");
  const backDrop = document.querySelector(".form-back-drop");
  const crossIcon = document.querySelector(".cross-icon");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("body").classList.add("side-content-visible");
    });
  });
  backDrop.addEventListener("click", () => {
    document.querySelector("body").classList.remove("side-content-visible");
  });
  crossIcon.addEventListener("click", () => {
    document.querySelector("body").classList.remove("side-content-visible");
  });
};

export const scrollTopFun = () => {
  let scrollUp = document.querySelector(".scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.style.display = "block";
    } else {
      scrollUp.style.display = "none";
    }
  });
};
