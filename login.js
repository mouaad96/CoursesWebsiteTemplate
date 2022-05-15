let signBtn = document.querySelector(".signin-btn");
let signContainer = document.querySelector(".signin-container");
let logContainer = document.querySelector(".login-container");
signBtn.addEventListener("click", () => {
  signContainer.classList.toggle("show");
  logContainer.classList.toggle("hide");
  if (signContainer.classList.contains("show")) {
    signBtn.value = "تسجيل الدخول";
  } else {
    signBtn.value = "أنشئ حسابك";
  }
});
