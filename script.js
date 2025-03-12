document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();
        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        // Username validation
        if (username === "") {
            showError(usernameInput, "Username is required");
            isValid = false;
        }

        // Password validation
        if (password === "") {
            showError(passwordInput, "Password is required");
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordInput, "Must be at least 6 characters");
            isValid = false;
        }

        if (isValid) {
            alert(`Welcome, ${username}! Logging you in...`);
            form.submit(); // Replace with actual authentication logic
        }
    });

    function showError(inputElement, message) {
        let errorDiv = inputElement.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains("error")) {
            errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.style.color = "red";
            errorDiv.style.fontSize = "12px";
            errorDiv.style.position = "absolute";
            errorDiv.style.marginTop = "3px";
            inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
        }
        errorDiv.textContent = message;
    }
});
