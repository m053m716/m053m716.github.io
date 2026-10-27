(function () {
  var wrap = document.querySelector('[data-profile-carousel]');
  if (!wrap) return;
  var imgs = Array.prototype.slice.call(wrap.querySelectorAll('.profile-carousel__img'));
  if (imgs.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var idx = 0, timer = null, ANIM = 380, PERIOD = 4200;
  function step() {
    var cur = imgs[idx];
    var nxt = imgs[(idx + 1) % imgs.length];
    cur.classList.add('swivel-out');
    setTimeout(function () {
      cur.classList.remove('is-active', 'swivel-out');
      cur.setAttribute('aria-hidden', 'true');
      nxt.classList.add('is-active', 'swivel-in');
      nxt.removeAttribute('aria-hidden');
      setTimeout(function () { nxt.classList.remove('swivel-in'); }, ANIM);
      idx = (idx + 1) % imgs.length;
    }, ANIM);
  }
  function start() { if (!timer) timer = setInterval(step, PERIOD); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);
  wrap.addEventListener('focusin', stop);
  wrap.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { stop(); } else { start(); }
  });
  start();
})();
