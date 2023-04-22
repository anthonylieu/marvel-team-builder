const signout = document.querySelector(".signout");

const logout = async () => {
  const response = await fetch("/api/user-routes/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("http://localhost:3001/");
  } else {
    alert(response.statusText);
  }
};

signout.addEventListener("click", logout);
