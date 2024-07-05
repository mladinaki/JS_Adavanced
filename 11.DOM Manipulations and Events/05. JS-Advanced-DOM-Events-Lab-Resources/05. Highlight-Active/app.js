function focused() {
  const input = document.getElementsByTagName("input");

  Array.from(input).forEach((el) => {
    el.addEventListener("focus", focus);
    el.addEventListener("blur", delFocus);

    function focus(e) {
      e.target.parentElement.classList.add("focused");
    }

    function delFocus(e) {
      e.target.parentElement.classList.remove("focused");
    }
  });
}
