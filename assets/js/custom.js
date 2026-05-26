/* Simple script for interacting with tab elements.*/
(function () {
    var storedTheme;
    try {
        storedTheme = localStorage.getItem("site-theme");
    } catch (error) {
        storedTheme = null;
    }
    document.documentElement.setAttribute("data-theme", storedTheme || "dark");
})();

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeColor(theme);
    try {
        localStorage.setItem("site-theme", theme);
    } catch (error) {
        // Theme still applies for this page load when storage is unavailable.
    }
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) {
        return;
    }
    var isLight = theme === "light";
    var text = toggle.querySelector(".theme-toggle__text");
    toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    if (text) {
        text.textContent = isLight ? "Dark" : "Light";
    }
}

function updateThemeColor(theme) {
    var themeColor = document.querySelector("meta[name='theme-color']");
    if (themeColor) {
        themeColor.setAttribute("content", theme === "light" ? "#f6f8fb" : "#111827");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeColor(currentTheme);
    updateThemeToggle(currentTheme);
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
        toggle.addEventListener("click", function () {
            var activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
            setTheme(activeTheme === "dark" ? "light" : "dark");
        });
    }
});

function openTab(evt, name) {
    // Declare all variables.
    var i, tabcontent, tablinks, added_class;
     // Get all elements with class="tabcontent" and hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Check to see if " active" should be added or removed from selected tab
    if (evt.currentTarget.className.includes(" active")) {
        document.getElementById(name).style.display = "none";
        added_class = "";
    } else {
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(name).style.display = "block";
        added_class = " active";
    }
    // Get all "tablinks" and remove " active" classes
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += added_class;
}
