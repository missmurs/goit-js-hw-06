const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки при відправці форми

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Please fill in all fields."); // Виводить alert, якщо є незаповнені поля
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData); // Виводить об'єкт із введеними даними в консоль
    this.reset(); // Очищає значення полів форми
  }
});
