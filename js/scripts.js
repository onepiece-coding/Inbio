// Get HTML Elements:

const sidebarOverlayEl = document.querySelector(".sidebar--overlay");
const sidebarEl = document.querySelector(".sidebar");
const sidebarOpenBtnEl = document.querySelector(".sidebar--open-btn");
const sidebarCloseBtnEl = document.querySelector(".sidebar--close-btn");
const toUpBtnEl = document.querySelector(".to-up-btn");

// Open Sidebar On Click Open Button:

sidebarOpenBtnEl.addEventListener("click", () => {
  sidebarOverlayEl.classList.add("open");
});

// Close Sidebar On Click Close Button:

sidebarCloseBtnEl.addEventListener("click", () => {
  sidebarOverlayEl.classList.remove("open");
});

// Close Sidebar on Open Outside It:

document.addEventListener("click", (e) => {
  if (!sidebarOpenBtnEl.contains(e.target) && !sidebarEl.contains(e.target)) {
    sidebarOverlayEl.classList.remove("open");
  }
});

// Show / Hide To Up Button:

window.addEventListener("scroll", () => {
  if (window.scrollY >= 96) {
    toUpBtnEl.classList.add("show");
  } else {
    toUpBtnEl.classList.remove("show");
  }
});

// Scroll To Top:

toUpBtnEl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
