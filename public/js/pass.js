function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        document.querySelector(".password-toggle").textContent = "Hide";
    } else {
        passwordField.type = "password";
        document.querySelector(".password-toggle").textContent = "Show";
    }
}