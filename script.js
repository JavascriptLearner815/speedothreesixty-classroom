let redirectUrl = document.getElementById("redirect").value;
let redirectButton = document.getElementById("redirect-go");
redirectButton.addEventListener("click", () => {
  if (redirectUrl) window.open(redirectUrl);
});
