/* Terapeuta 360 · página de vendas · interações */
(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Header sombra ao rolar --- */
  var hdr = document.getElementById('hdr');
  var onScroll = function () {
    if (window.scrollY > 12) hdr.classList.add('scrolled');
    else hdr.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Menu mobile --- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- FAQ acordeão --- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* --- Carrosséis (data-track) --- */
  document.querySelectorAll('.carousel-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('data-track'));
      if (!track) return;
      var card = track.querySelector('.learn-card, .video-card');
      var step = card ? card.getBoundingClientRect().width + 22 : 320;
      track.scrollBy({ left: btn.classList.contains('prev') ? -step : step, behavior: 'smooth' });
    });
  });

  /* --- Reveal ao rolar --- */
  var targets = document.querySelectorAll(
    '.hero-copy, .hero-photo, .cred, .ctx-photo, .ctx-text, .head, .pq-card, .learn-card, .dia-card, .browser, .testi, .entrega-copy, .notfor, .preco-anchor, .preco-card, .faq-item, .manoel-copy, .manoel-visual, .final'
  );
  targets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }
})();
