(function () {
  var wrap = document.querySelector('[data-profile-carousel]');
  if (!wrap) return;
  var imgs = Array.prototype.slice.call(wrap.querySelectorAll('.profile-carousel__img'));
  if (imgs.length < 2) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var idx = 0, ANIM = 380, busy = false;
  /* Random starting photo on each page load. */
  var start = Math.floor(Math.random() * imgs.length);
  imgs.forEach(function (img, i) {
    var on = i === start;
    img.classList.toggle('is-active', on);
    if (on) { img.removeAttribute('aria-hidden'); } else { img.setAttribute('aria-hidden', 'true'); }
  });
  idx = start;
  function flip() {
    if (busy) return;
    var cur = imgs[idx];
    var nxt = imgs[(idx + 1) % imgs.length];
    if (reduce) {
      cur.classList.remove('is-active');
      cur.setAttribute('aria-hidden', 'true');
      nxt.classList.add('is-active');
      nxt.removeAttribute('aria-hidden');
      idx = (idx + 1) % imgs.length;
      return;
    }
    busy = true;
    cur.classList.add('swivel-out');
    setTimeout(function () {
      cur.classList.remove('is-active', 'swivel-out');
      cur.setAttribute('aria-hidden', 'true');
      nxt.classList.add('is-active', 'swivel-in');
      nxt.removeAttribute('aria-hidden');
      setTimeout(function () { nxt.classList.remove('swivel-in'); busy = false; }, ANIM);
      idx = (idx + 1) % imgs.length;
    }, ANIM);
  }
  wrap.addEventListener('click', flip);
  wrap.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      flip();
    }
  });
})();
