const aboutBtn = document.getElementById("about-button");
const aboutMe = document.getElementById("about-me");
const closeButton = document.getElementById("close");
const main = document.querySelector(".main");

// Listener for adding about me
aboutBtn.addEventListener("click", () => {
  aboutMe.classList.remove("hidden");
});

// Listener for closing about me by clicking outside of section
document.addEventListener("click", (event) => {
  if (event.target == aboutMe) {
    console.log('hello')
    aboutMe.classList.add("hidden");
  }
});

// Listener for closing with close button
closeButton.addEventListener("click", () => {
  aboutMe.classList.add("hidden");
});
