/* Homepage research banner: pick a random image from the banner pool
   (assets/images/banner/) on each page load. The pool is rendered into
   the .research-banner element's data-banners attribute by Liquid in
   _pages/about.html; the first pool image is the no-JS default. */
(function () {
  var el = document.querySelector('.research-banner[data-banners]');
  if (!el) { return; }
  var list;
  try { list = JSON.parse(el.getAttribute('data-banners')); } catch (e) { return; }
  if (!list || list.length < 2) { return; }
  var img = el.querySelector('.research-banner__img');
  if (!img) { return; }
  var pick = list[Math.floor(Math.random() * list.length)];
  if (pick && pick !== img.getAttribute('src')) {
    img.setAttribute('src', pick);
  }
})();
