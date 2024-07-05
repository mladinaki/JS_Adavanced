function validate() {
  const user = document.getElementById("username");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  const company = document.getElementById("company");
  const companyInfo = document.getElementById("companyInfo");
  const validate = document.getElementById("valid");

  document.getElementById("submit").addEventListener("click", onSubmit);

  company.addEventListener("change", () => {
    if (company.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });

  function onSubmit(e) {
    e.preventDefault();

    const userPattern = /^[a-z0-9]{3,20}$/g;
    const passPattern = /^[\w]{5,15}$/g;
    const emailPattern = /^[a-z0-9\.]+@[a-z]+.[a-z][a-z]/g;

    if (userPattern.test(user.value)) {
      user.style.borderColor = "";
    } else {
      user.style.borderColor = "red";
    }
    if (emailPattern.test(email.value)) {
      email.style.borderColor = "";
    } else {
      email.style.borderColor = "red";
    }
    if (passPattern.test(pass.value)) {
      pass.style.borderColor = "";
    } else {
      pass.style.borderColor = "red";
    }
  }
}
