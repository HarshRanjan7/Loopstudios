// Get references to the mobile navigation icon and the mobile menu element
var mobilenav = document.getElementById('mobilenav');
var mobilemenu = document.getElementById('mobile-menu');

// Add a click event listener to the mobile navigation icon
mobilenav.onclick = function() {
    // Check if the mobile menu is currently hidden (off-screen to the right)
    // We use '100vw' (100% of viewport width) for a more robust responsive menu
    // The `getComputedStyle` is more reliable than `element.style.right` for checking current CSS
    var currentRight = window.getComputedStyle(mobilemenu).right;

    if (currentRight === "-100vw") {
        // If hidden, bring the menu into view (set right to 0)
        mobilemenu.style.right = "0";
        // Change the navigation icon to a 'close' icon
        mobilenav.src = "images/icon-close.svg";
    } else {
        // If visible, move the menu off-screen to the right
        mobilemenu.style.right = "-100vw";
        // Change the navigation icon back to a 'hamburger' icon
        mobilenav.src = "images/icon-hamburger.svg";
    }
};
