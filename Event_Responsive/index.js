let SearchForm = document.querySelector("header .SearchForm");
let LoginForm = document.querySelector("header .LoginForm");
let Information = document.querySelector("header .InfoMain");
let Navbar = document.querySelector("header .navbar");

//  For Navbar
document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
  SearchForm.classList.remove("active");
  LoginForm.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// For Search Form
document.querySelector("#SearchBtn").onclick = () => {
  SearchForm.classList.toggle("active");
  LoginForm.classList.remove("active");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// For Login Form
document.querySelector("#LoginBtn").onclick = () => {
  LoginForm.classList.toggle("active");
  SearchForm.classList.remove("active");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// For Information
document.querySelector("#InfoBtn").onclick = () => {
  Information.classList.add("active");
  Navbar.classList.remove("active");
};
// To Close The Information
document.querySelector("#InformationClass").onclick = () => {
  Information.classList.remove("active");
};

// For Home Slider
var swiper = new Swiper(".HomeSlider", {
  loop: true,
  grabCursor: true,
});

// For Review Slider
var swiper = new Swiper(".ReviewSlider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// For Blog Slider
var swiper = new Swiper(".BlogSlider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// For Theme Toggle
let ThemeToggle = document.querySelector(".ThemeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  LoginForm.classList.remove("active");
  SearchForm.classList.remove("active");
  Navbar.classList.remove("active");
};

// Main Logic To Toggle The Theme
document.querySelectorAll(".ThemeToggle .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
