// login.js

function closeAndGoHome() {
  // document.getElementById("login-modal").style.display = "none";
  window.location.href = "/html/index.html"; // Replace with your home page URL
}

function login(event) {
  event.preventDefault();
  const form = document.getElementById("loginForm");
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Logging in with", email, password);
  // Add your login logic here, such as sending data to your server.
}

// Add your login logic here, such as sending data to your server.

function loginWithGoogle() {
  console.log("Login with Google");
  // Integrate Google Login SDK
}

function loginWithFacebook() {
  console.log("Login with Facebook");
  // Integrate Facebook Login SDK
}

function loginWithGithub() {
  console.log("Login with Github");
  // Integrate Github Login SDK
}

function loginWithFeide() {
  console.log("Login with Feide");
  // Integrate Feide Login SDK
}
