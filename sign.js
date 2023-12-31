const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
const country = document.getElementById("country");
const subBtn = document.getElementById("submit-btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];

  if (username.value.trim() === "") {
    errors.push("Username required");
  }

  if (password.value.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (errors.length > 0) {
    errorMessage.innerHTML = errors.join(", ");
  } else {
    console.log(subBtn);
    subBtn.value = "Loading....";
    // creating / updating data on the server.
    fetch("https://john-cc-8556014fa412.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: username.value,
        password: password.value,
        country: country.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        subBtn.value = "Submit";
        errorMessage.innerHTML = "";
        window.location.href = "logIn.html";
      })
      .catch((err) => {
        console.log("err==>", err);
        subBtn.value = "Submit";
        errorMessage.innerHTML = err;
      });
  }
});
