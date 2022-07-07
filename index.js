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

// To check the scroll position on page load
reveal();

function reveal() {
  var reveals = document.querySelectorAll(".fade-in");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}