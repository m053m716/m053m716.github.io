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
    document.querySelectorAll("a[href]").forEach(function (link) {
        var href = link.getAttribute("href");
        if (!href || href.indexOf("http") !== 0) {
            return;
        }
        try {
            var url = new URL(href, window.location.href);
            if (url.origin !== window.location.origin) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        } catch (error) {
            // Ignore malformed links and let the browser handle them normally.
        }
    });
    document.querySelectorAll(".about-card, .news-card").forEach(function (card) {
        var body = card.querySelector(".about-card__body, .news-card__body");
        var button = card.querySelector(".about-card__expand, .news-card__expand");
        if (!body || !button) {
            return;
        }

        function getCardTitle() {
            var title = card.querySelector(".news-card__title, #about-title");
            return title ? title.textContent.trim() : "card";
        }

        function getCollapsedHeight() {
            var explicitHeight = parseFloat(card.getAttribute("data-collapsed-height"));
            if (!Number.isNaN(explicitHeight)) {
                return explicitHeight;
            }
            var maxHeight = parseFloat(window.getComputedStyle(body).maxHeight);
            return Number.isNaN(maxHeight) ? body.clientHeight : maxHeight;
        }

        function animateBodyHeight(toHeight, done) {
            if (body._heightAnimation) {
                cancelAnimationFrame(body._heightAnimation);
            }

            var current = body.getBoundingClientRect().height;
            var start = performance.now();
            var maxDuration = 280;
            body.style.overflow = "hidden";
            body.style.maxHeight = current + "px";

            function step(now) {
                current += (toHeight - current) * 0.28;
                if (Math.abs(toHeight - current) < 0.75 || now - start > maxDuration) {
                    body.style.maxHeight = toHeight + "px";
                    body._heightAnimation = null;
                    done();
                    return;
                }
                body.style.maxHeight = current + "px";
                body._heightAnimation = requestAnimationFrame(step);
            }

            body._heightAnimation = requestAnimationFrame(step);
        }

        function setExpanded(expanded) {
            var label = getCardTitle();
            button.setAttribute("aria-expanded", expanded ? "true" : "false");
            button.setAttribute("aria-label", (expanded ? "Collapse " : "Expand ") + label);
            button.querySelector("span").textContent = expanded ? "-" : "+";
        }

        function updateExpandableState() {
            if (card.classList.contains("is-expanded")) {
                return;
            }
            card.classList.add("is-expandable");
            body.style.maxHeight = "";
            var collapsedHeight = getCollapsedHeight();
            var isOverflowing = body.scrollHeight > collapsedHeight + 4;
            card.classList.toggle("is-expandable", isOverflowing);
            button.hidden = !isOverflowing;
            if (isOverflowing) {
                body.style.maxHeight = collapsedHeight + "px";
                body.style.overflow = "hidden";
            } else {
                body.style.maxHeight = "";
                body.style.overflow = "";
            }
            setExpanded(false);
        }

        button.addEventListener("click", function () {
            var expanded = !card.classList.contains("is-expanded");
            var collapsedHeight = getCollapsedHeight();
            var targetHeight;
            if (expanded) {
                card.classList.add("is-expanded");
                setExpanded(true);
                targetHeight = body.scrollHeight;
                animateBodyHeight(targetHeight, function () {
                    body.style.maxHeight = "none";
                    body.style.overflow = "visible";
                    card.scrollIntoView({ block: "nearest", behavior: "smooth" });
                });
            } else {
                body.style.maxHeight = body.scrollHeight + "px";
                body.style.overflow = "hidden";
                setExpanded(false);
                animateBodyHeight(collapsedHeight, function () {
                    card.classList.remove("is-expanded");
                    body.style.maxHeight = collapsedHeight + "px";
                    body.style.overflow = "hidden";
                });
            }
        });

        updateExpandableState();
        window.addEventListener("load", updateExpandableState);
        window.addEventListener("resize", updateExpandableState);
    });
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
