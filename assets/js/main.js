const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".links");

function scrollToBottom() {
  window.scroll(0, document.body.scrollHeight);
}

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("activee");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove("active");
  }
});

var loader = document.getElementById("preloader");

var timeout = setTimeout(function () {
  loader.style.display = "none";
}, 1000);
