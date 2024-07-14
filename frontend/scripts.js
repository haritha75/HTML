document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById("message").textContent =
        "Login successful! Redirecting...";

      localStorage.setItem("user", JSON.stringify(result));

      if (result.user_role === "ADMIN") {
        window.location.href = "admin.html";
      } else if (result.user_role === "PROJECT_MANAGER") {
        window.location.href = "project_manager.html";
      } else {
        window.location.href = "team_member.html";
      }
    } else {
      document.getElementById("message").textContent =
        "Login failed. Please try again.";
    }
  });
