document.documentElement.classList.add('js');
(function () {
  // sticky nav shadow
  try {
    var nav = document.getElementById('nav');
    if (nav) {
      var onScroll = function () { nav.classList.toggle('on', window.scrollY > 4); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  } catch (e) {}

  try {
    var yr = document.getElementById('yr');
    if (yr) yr.textContent = '2026';
  } catch (e) {}

  // mobile menu
  try {
    var burger = document.getElementById('burger');
    var sheet = document.getElementById('sheet');
    if (burger && sheet) {
      burger.addEventListener('click', function () {
        var open = burger.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        sheet.hidden = !open;
      });
      sheet.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          sheet.hidden = true;
        });
      });
    }
  } catch (e) {}

  // scroll reveals
  try {
    var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    var rv = document.querySelectorAll('.reveal');
    if (!reduce && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
      rv.forEach(function (el) { io.observe(el); });
      setTimeout(function () { rv.forEach(function (el) { el.classList.add('in'); }); }, 1200);
    } else {
      rv.forEach(function (el) { el.classList.add('in'); });
    }
  } catch (e) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // reviews slider
  try {
    var track = document.getElementById('revTrack');
    var prev = document.getElementById('revPrev');
    var next = document.getElementById('revNext');
    if (track && prev && next) {
      var step = function () {
        var card = track.querySelector('.rev2');
        return card ? card.getBoundingClientRect().width + 20 : 320;
      };
      prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
      next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    }
  } catch (e) {}

  // floating quote widget dismiss
  try {
    var qw = document.getElementById('qwidget');
    var qx = document.getElementById('qwidgetX');
    if (qw && qx) {
      qx.addEventListener('click', function () { qw.classList.add('hide'); });
    }
  } catch (e) {}
})();
