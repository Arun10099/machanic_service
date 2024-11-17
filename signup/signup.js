function closeSignup() {
  // Logic to close the signup modal
  console.log("Close signup modal");
}

function signup(event) {
  event.preventDefault();
  const form = document.getElementById("signupForm");
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");

  console.log("Signing up with", email, password, firstName, lastName);

  // Add your signup logic here, such as sending data to your server.
}

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
