import "./style.css";
import gsap from "gsap";
import {car} from "./car.js";

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

  // start car animation
  tween.call(carAnimation);
}

// car animation
function carAnimation() {
  car.play();
}

// dropdown menu
const dropdownIcon = document.querySelector(".dropdown-icon");
const nav = document.querySelector("nav");

dropdownIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("show");
});

// Close the nav when clicking outside of it
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !dropdownIcon.contains(e.target)) {
    nav.classList.remove("show");
  }
});
