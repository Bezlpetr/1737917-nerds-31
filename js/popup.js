const popup = document.querySelector(".modal-sending");
const button_wtite = document.querySelector(".button-write-to-us");
const button_write_close = document.querySelector(".modal-close");
const name = popup.querySelector("[name=sender-name]");
const form = popup.querySelector(".sending-form");
const email = popup.querySelector("[name=sender-email]");
const text = popup.querySelector("[name=sender-text]");

let isStorageSupport = true;
let storage_name = "";
let storage_email = "";
try {
  storage_name = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}
try {
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
button_wtite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-visible");
  if (storage_name != null && storage_email != null) {
    name.value = storage_name;
    email.value = storage_email;
    text.focus();
  }
});

button_write_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-visible");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (popup.classList.contains("modal-visible")) {
      evt.preventDefault();
      popup.classList.remove("modal-visible");
      popup.classList.remove("modal-error");
    }
  }
});
