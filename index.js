const aboutBtn = document.getElementById("about-button");
const aboutMe = document.getElementById("about-me");
const closeButton = document.getElementById("close");
const main = document.querySelector(".main");
const arrow = document.querySelector("#top-arrow")

//Get the button:
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    arrow.classList.remove("hidden");
  } else {
    arrow.classList.add("hidden");
  }
}
