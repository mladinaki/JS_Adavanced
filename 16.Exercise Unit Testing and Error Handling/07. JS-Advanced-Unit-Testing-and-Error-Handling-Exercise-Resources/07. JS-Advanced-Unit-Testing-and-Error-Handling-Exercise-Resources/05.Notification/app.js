function notify(message) {
  const msg = document.getElementById("notification");
  msg.innerText = message;
  msg.style.display = "block";

  msg.addEventListener("click", (el) => {
    el.target.style.display = "none";
  });
}
