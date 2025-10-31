<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - CUREAI</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="auth-container">
        <div class="form-box" id="login-box">
            <h2>Login</h2>
            <form id="login-form">
                <label for="login-email">Email:</label>
                <input type="email" id="login-email" required>

                <label for="login-password">Password:</label>
                <input type="password" id="login-password" required>

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#" id="show-signup">Sign Up</a></p>
        </div>

        <div class="form-box" id="signup-box" style="display: none;">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <label for="signup-name">Name:</label>
                <input type="text" id="signup-name" required>
                
                <label for="signup-email">Email:</label>
                <input type="email" id="signup-email" required>

                <label for="signup-password">Password:</label>
                <input type="password" id="signup-password" required>

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="#" id="show-login">Login</a></p>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const loginBox = document.getElementById("login-box");
            const signupBox = document.getElementById("signup-box");
            const showSignup = document.getElementById("show-signup");
            const showLogin = document.getElementById("show-login");

            showSignup.addEventListener("click", function(event) {
                event.preventDefault();
                loginBox.style.display = "none";
                signupBox.style.display = "block";
            });

            showLogin.addEventListener("click", function(event) {
                event.preventDefault();
                signupBox.style.display = "none";
                loginBox.style.display = "block";
            });

            document.getElementById("login-form").addEventListener("submit", function(event) {
                event.preventDefault();
                const email = document.getElementById("login-email").value;
                const password = document.getElementById("login-password").value;
                
                if (email === "test@example.com" && password === "password") {
                    alert("Login Successful!");
                    window.location.href = "dashboard.html";
                } else {
                    alert("Invalid credentials, please try again.");
                }
            });

            document.getElementById("signup-form").addEventListener("submit", function(event) {
                event.preventDefault();
                alert("Signup Successful! Redirecting to login...");
                signupBox.style.display = "none";
                loginBox.style.display = "block";
            });
        });
    </script>
</body>
</html>