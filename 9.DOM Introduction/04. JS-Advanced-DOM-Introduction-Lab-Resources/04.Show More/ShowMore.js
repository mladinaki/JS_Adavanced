function showText() {
  let more = (document.getElementById("more").style.display = "none");
  let text = (document.getElementById("text").style.display = "inline");
}

function create(tag, content, calssName) {
  const el = document.createElement(tag);
  if (content) {
    el.textContent = content;
  }
  if (calssName) {
    el.calssName = calssName;
  }
  return el;
}
