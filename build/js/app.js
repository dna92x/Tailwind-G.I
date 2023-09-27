//  Dark mode script
const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
//----------------------------------------------------------------------
// bar-icn-open
const barIcnOpenBtn = document.querySelector(".dna-bar-icn");
const navBox = document.querySelector(".dna-nav-box");
const overlay = document.querySelector(".overlay");

barIcnOpenBtn.addEventListener("click", () => {
  navBox.classList.remove("-right-64");
  navBox.classList.add("right-0");
  overlay.classList.add("overlay--visible");
  barIcnCloseBtn.classList.add("overlay--visible");
});

// bar-icn-close
const barIcnCloseBtn = document.querySelector(".dna-x-icn");

barIcnCloseBtn.addEventListener("click", () => {
  navBox.classList.add("-right-64");
  navBox.classList.remove("right-0");
  overlay.classList.remove("overlay--visible");
});

// bar-icn-close
overlay.addEventListener("click", () => {
  navBox.classList.add("-right-64");
  navBox.classList.remove("right-0");
  overlay.classList.remove("overlay--visible");
});
//----------------------------------------------------------------------







