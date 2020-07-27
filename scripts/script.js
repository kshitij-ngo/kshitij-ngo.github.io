const header = document.querySelector("header");
const installMsg = document.querySelector("#install-msg");
const installOkayBtn = document.querySelector("#install-msg .btn-div");
const isMsgShown = localStorage.getItem("isMsgShown") || false;
const hiddenNav = document.querySelector(".hidden-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".hidden-nav .close");

function disableInstallMsg() {
  localStorage.setItem("isMsgShown", true);
  installMsg.style.display = "none";
}
if (isMsgShown) {
  disableInstallMsg();
}

function openMenu() {
  hiddenNav.classList.add("shown");
}

function closeMenu() {
  hiddenNav.classList.remove("shown");
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

if (installOkayBtn) installOkayBtn.addEventListener("click", disableInstallMsg);

document.addEventListener("scroll", (e) => {
  var bodyRect = document.body.getBoundingClientRect();
  if (bodyRect.y < 0) {
    header.style.background = "white";
  } else {
    header.style.background = "transparent";
  }
});
