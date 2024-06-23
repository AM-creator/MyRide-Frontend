import "./style.css";
import gsap from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  loadAnimation();
});

function loadAnimation() {
  const tween = gsap.timeline({ delay: 0.5 });
  // loader animation
  tween.to(".loader", { duration: 0.5, opacity: 0, display: "none" });

  // header animation
  tween.from("header", { duration: 0.3, ease: "power2", y: -16 * 6 });
  tween.to("header", { duration: 0, transition: 0.3 });

  // background animation
  tween.from(".background", {
    duration: 0.5,
    ease: "power2",
    opacity: 0,
    x: 80,
  });

  // aside animation
  tween.from(".info", { duration: 0.3, ease: "power2", opacity: 0, y: 40 });
}

// dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  const dropdownIcon = document.querySelector("header i");
  const dropdownContent = document.querySelector(".dropdown-menu");

  dropdownIcon.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });
});
