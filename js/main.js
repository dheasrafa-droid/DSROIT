const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const forgotModal = document.getElementById("forgotModal");

document.getElementById("btnLogin").addEventListener("click", () => {
  loginModal.style.display = "flex";
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      modal.style.display = "none";
    }
  });
});

// Switch ke Register
document.getElementById("toRegister").addEventListener("click", e => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
});

// Register ke Login
document.getElementById("toLoginFromReg").addEventListener("click", e => {
  e.preventDefault();
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
});

// Login ke Forgot Password
document.getElementById("toForgot").addEventListener("click", e => {
  e.preventDefault();
  loginModal.style.display = "none";
  forgotModal.style.display = "flex";
});

// Forgot ke Login
document.getElementById("toLoginFromForgot").addEventListener("click", e => {
  e.preventDefault();
  forgotModal.style.display = "none";
  loginModal.style.display = "flex";
});
