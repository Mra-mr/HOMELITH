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
