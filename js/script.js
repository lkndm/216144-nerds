var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = document.querySelector("#modal-content");
var user = document.querySelector("[name=user]");
var email = document.querySelector("[name=e-mail]");
var storage = localStorage.getItem("user");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    user.value = storage;
  } else {
    user.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!user.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetHeight = popup.offsetHeight;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("user", user.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
