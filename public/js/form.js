const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector(".username-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user-routes", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/characters");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username").value.trim();
  const password = document.querySelector(".password").value.trim();
  const cpassword = document.querySelector(".cpassword").value.trim();

  if (password != cpassword) {
    return;
  }

  if (username && password) {
    const response = await fetch("/api/user-routes", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/character");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login").addEventListener("submit", loginFormHandler);

document.querySelector(".signup").addEventListener("submit", signupFormHandler);
