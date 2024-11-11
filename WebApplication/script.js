document.addEventListener("DOMContentLoaded", function() {
    const actionButton = document.getElementById("actionButton");
    const message = document.getElementById("message");

    actionButton.addEventListener("click", function() {
        message.style.display = "block";
    });
});
