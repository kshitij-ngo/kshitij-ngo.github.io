const header = document.querySelector("header");
const installMsg = document.querySelector("#install-msg");
const installOkayBtn = document.querySelector("#install-msg .btn-div");
const isMsgShown = localStorage.getItem("isMsgShown") || false;

function disableInstallMsg() {
  localStorage.setItem("isMsgShown", true);
  installMsg.style.display = "none";
}
if (isMsgShown) {
  disableInstallMsg();
}

installOkayBtn.addEventListener("click", disableInstallMsg);

document.addEventListener("scroll", (e) => {
  var bodyRect = document.body.getBoundingClientRect();
  if (bodyRect.y < 0) {
    header.style.background = "white";
  } else {
    header.style.background = "transparent";
  }
});
