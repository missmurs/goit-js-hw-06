function submitForm(event) {
  event.preventDefault();
  var form = document.querySelector(".login-form");
  var emailInput = form.elements.email;
  var passwordInput = form.elements.password;

  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert("Please fill in all fields of the form.");
    return;
  }

  var formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(formData);
  form.reset();
}
