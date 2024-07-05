function toggle() {
  const text = document.getElementById("extra");
  const btn = document.querySelector("span.button");

  if (btn.textContent === "More") {
    btn.textContent = "Less";
    text.style.display = "block";
  } else {
    btn.textContent = "More";
    text.style.display = "none";
  }
}

