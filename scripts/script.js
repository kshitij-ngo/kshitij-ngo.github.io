const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  var bodyRect = document.body.getBoundingClientRect();
  if (bodyRect.y < -100) {
    header.style.background = "white";
  } else {
    header.style.background = "transparent";
  }
});
