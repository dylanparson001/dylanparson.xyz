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

// Listener for adding about me
aboutBtn.addEventListener("click", () => {
  aboutMe.classList.remove("hidden");
});

// Listener for closing about me by clicking outside of section
document.addEventListener("click", (event) => {
  if (event.target != aboutMe && event.target.id != "about-button" && event.target.classList != "about-me") {
    aboutMe.classList.add("hidden");
  }
});

// Listener for closing with close button
closeButton.addEventListener("click", () => {
  aboutMe.classList.add("hidden");
});

window.addEventListener("scroll", reveal);

