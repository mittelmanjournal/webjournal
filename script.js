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
