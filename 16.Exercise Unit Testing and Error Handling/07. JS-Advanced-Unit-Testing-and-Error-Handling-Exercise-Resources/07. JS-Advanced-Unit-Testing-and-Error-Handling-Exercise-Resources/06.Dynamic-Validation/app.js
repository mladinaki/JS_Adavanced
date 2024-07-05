function validate() {
  const patern = /[a-z=\.]+@[a-z-\.].[a-z].[a-z]+/gm
  const email = document.getElementById("email");

  email.addEventListener("change", (e) => {
    if (patern.test(e.target.value)) {
      e.target.removeAttribute('class');
      return
    }
    e.target.className = 'error'
  });
}
