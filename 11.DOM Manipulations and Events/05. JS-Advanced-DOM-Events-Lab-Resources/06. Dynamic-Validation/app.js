function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/g;
    let email = document.getElementById("email");
    let value = email.value;
  
    email.addEventListener("change", function (event) {
      if (reg.test(event.target.value)) {
        event.target.removeAttribute("class");
        return;
      }
      event.target.className = "error";
    });
  }