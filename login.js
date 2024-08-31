const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function onSignIn(googleUser) {
  console.log("reached");
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "423329562434-dsn9edh8mpo8q5q3tfovbsmt33tgrmfc.apps.googleusercontent.com"
);

async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      "423329562434-dsn9edh8mpo8q5q3tfovbsmt33tgrmfc.apps.googleusercontent.com",
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  console.log("User ID: ", userid);
  // Further processing...
}

// Use the function
verifyToken("ID_TOKEN_RECEIVED_FROM_CLIENT");
