// Change form title based on category
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category) {
        document.getElementById("form-title").innerText = `Apply for ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }

    document.getElementById("fake-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Hide form and show warning message
        document.getElementById("fake-form").style.display = "none";
        document.getElementById("warning-message").style.display = "block";
    });
});
