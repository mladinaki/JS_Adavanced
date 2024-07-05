function attachGradientEvents() {
  const gradient = document.getElementById("gradient");

  gradient.addEventListener("mousemove", onGradient);
  gradient.addEventListener("mouseout", onGradientOut);

  function onGradient(e) {
    let power = e.offsetX / (e.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    document.getElementById("result").textContent = power + "%";
    console.log(power);
  }
  function onGradientOut() {
    document.getElementById("result").textContent = "";
  }
}
