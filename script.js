function toggleDiv(post, gradient, btn) {   
    var showHide = document.getElementById(btn);
    var postBody = document.getElementById(post);
    var postHeader = document.getElementById(gradient);
    if (postBody.style.display != "none") {
        showHide.textContent = "Show";
        postBody.style.display = "none";
        postHeader.style.color = "transparent";
        postHeader.style.backgroundImage = "linear-gradient(to left, white, black)";
    } else {
        showHide.textContent = "Hide";
        postBody.style.display = "inline-block"; // Change to inline-block to appear on the same line
        postHeader.style.color = "black";
        postHeader.style.backgroundImage = "none";
    }
}

// JavaScript code
window.addEventListener('DOMContentLoaded', function() {
    var gradientTextDesktop = document.getElementById('gradient-text-1-desktop');
    var gradientTextMobile = document.getElementById('gradient-text-1-mobile');

    // Check if the screen width is less than or equal to 767px (typical for mobile devices)
    if (window.innerWidth <= 767) {
        gradientTextMobile.style.display = 'inline'; // Show mobile version text
    } else {
        gradientTextDesktop.style.display = 'inline'; // Show desktop version text
    }
});
