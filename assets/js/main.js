/* Homelith — interactions */
(function () {
  'use strict';

  /* Mobile menu */
  window.toggleMenu = function () {
    var m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  };

  /* Interior fit-out carousel */
  window.homeCar = function (dir) {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.fit-slide'));
    if (!slides.length) return;
    var cur = slides.findIndex(function (s) { return s.classList.contains('is-active'); });
    if (cur < 0) cur = 0;
    slides[cur].classList.remove('is-active');
    var next = (cur + dir + slides.length) % slides.length;
    slides[next].classList.add('is-active');
  };

  /* Projects — filter dropdown */
  window.toggleFilter = function (e) {
    if (e) e.stopPropagation();
    var menu = document.querySelector('.filter-menu');
    if (menu) menu.hidden = !menu.hidden;
  };
  window.pickFilter = function (el) {
    var label = el.getAttribute('data-f');
    var trigger = document.querySelector('[onclick^="toggleFilter"]');
    if (trigger) trigger.childNodes[0].textContent = label + ' ';
    var menu = document.querySelector('.filter-menu');
    if (menu) menu.hidden = true;
    var grid = document.querySelector('.pj-grid');
    if (!grid) return;
    Array.prototype.forEach.call(grid.querySelectorAll('.pj-card'), function (card) {
      var cat = card.getAttribute('data-cat') || 'House';
      card.style.display = (label === 'All' || cat === label) ? '' : 'none';
    });
  };
  document.addEventListener('click', function () {
    var menu = document.querySelector('.filter-menu');
    if (menu && !menu.hidden) menu.hidden = true;
  });

  /* Projects — pagination */
  window.pickPage = function (el, next) {
    var nums = Array.prototype.slice.call(document.querySelectorAll('[data-p]'));
    if (!nums.length) return;
    var active = nums.find(function (n) { return n.style.color.indexOf('24') > -1 || n.dataset.active; });
    var target = el;
    if (next) {
      var curIdx = nums.findIndex(function (n) { return n.dataset.active === '1'; });
      target = nums[Math.min(curIdx + 1, nums.length - 1)] || nums[0];
    }
    nums.forEach(function (n) { n.style.color = '#FFFFFF'; n.dataset.active = ''; });
    if (target) { target.style.color = '#18339C'; target.dataset.active = '1'; }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Contact — budget pills */
  window.pickBudget = function (el) {
    Array.prototype.forEach.call(document.querySelectorAll('.budget-pill'), function (p) {
      p.classList.remove('is-active');
    });
    el.classList.add('is-active');
  };

  /* Contact — prevent real form submit (static demo) */
  document.addEventListener('DOMContentLoaded', function () {
    var pg = document.querySelectorAll('[data-p]');
    pg.forEach(function (n) { if (n.style.color.indexOf('18339C') > -1 || n.textContent.trim() === '2') n.dataset.active = '1'; });
  });

})();

/* ===== Bannière de consentement cookies — HOMELITH (composant autonome) ===== */
(function () {
  'use strict';
  var KEY = 'homelith_cookie_consent';

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    try { if (localStorage.getItem(KEY)) return; } catch (e) { /* localStorage indispo : on affiche quand même */ }

    var st = document.createElement('style');
    st.textContent =
      '#hl-cookie a{color:#18339C;text-decoration:underline;text-underline-offset:2px}' +
      '.hl-ck-btn{background:transparent;border:1px solid rgba(255,255,255,.55);color:#fff;font-family:inherit;font-size:11px;font-weight:500;letter-spacing:.08em;padding:9px 18px;cursor:pointer;transition:color .2s,border-color .2s}' +
      '.hl-ck-btn:hover,.hl-ck-btn:focus-visible{color:#18339C;border-color:#18339C}' +
      '.hl-ck-btn:focus-visible{outline:1px solid #18339C;outline-offset:2px}';
    document.head.appendChild(st);

    var bar = document.createElement('div');
    bar.id = 'hl-cookie';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Consentement aux cookies');
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#030304;border-top:1px solid rgba(255,255,255,.18)';
    bar.innerHTML =
      '<div style="width:min(1200px,92vw);margin:0 auto;padding:clamp(14px,1.7vw,20px) 0;display:flex;align-items:center;gap:clamp(16px,3vw,44px);flex-wrap:wrap">' +
        '<div style="flex:1 1 400px;min-width:220px;font-size:11.5px;line-height:1.6;color:#b9b9b9">' +
          'Nous utilisons uniquement les technologies nécessaires au fonctionnement du site. Vous pouvez accepter ou refuser les cookies optionnels. ' +
          '<a href="politique-cookies.html">Politique de cookies</a>' +
        '</div>' +
        '<div style="display:flex;gap:10px;flex:0 0 auto">' +
          '<button type="button" class="hl-ck-btn" data-choice="refused">REFUSER</button>' +
          '<button type="button" class="hl-ck-btn" data-choice="accepted">ACCEPTER</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);

    function choose(v) {
      try { localStorage.setItem(KEY, v); } catch (e) {}
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    }
    Array.prototype.forEach.call(bar.querySelectorAll('.hl-ck-btn'), function (b) {
      b.addEventListener('click', function () { choose(b.getAttribute('data-choice')); });
    });
  });
})();
