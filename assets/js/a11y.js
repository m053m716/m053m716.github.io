/* Accessibility helpers.
   1) Keep the mobile navigation toggle's aria-expanded in sync with
      the menu state (the theme JS toggles it on the same click).
   2) Arrow-key / Home / End navigation for the Publications tabs,
      per the ARIA tabs pattern (roles are already in the markup). */
(function () {
  var navBtn = document.querySelector('.greedy-nav > button');
  if (navBtn) {
    navBtn.addEventListener('click', function () {
      var expanded = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.pub-tab[role="tab"]'));
  if (tabs.length > 1) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('keydown', function (e) {
        var j = null;
        if (e.key === 'ArrowRight') { j = (i + 1) % tabs.length; }
        else if (e.key === 'ArrowLeft') { j = (i - 1 + tabs.length) % tabs.length; }
        else if (e.key === 'Home') { j = 0; }
        else if (e.key === 'End') { j = tabs.length - 1; }
        if (j !== null) {
          e.preventDefault();
          tabs[j].focus();
          tabs[j].click();
        }
      });
    });
  }
})();
