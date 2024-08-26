const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function credentialHandler(response) {
  console.log(response.credential);
  // const responsePayLoad = decodeJwtResponse(response.credential);
  // console.log("idToken", responsePayLoad.sub);
  // console.log("email", responsePayLoad.email);
  // console.log("name", responsePayLoad.name);
  // console.log("picture", responsePayLoad.picture);
  // console.log("given_name", responsePayLoad.given_name);
  // console.log("family_name", responsePayLoad.family_name);
}
