/* Terapeuta 360 · editorial · interações leves */
(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Menu mobile (rail) --- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('railNav');
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

  /* --- Carrossel de mídia --- */
  var carousel = document.getElementById('mediaCarousel');
  if (carousel) {
    var track = document.getElementById('mediaTrack');
    var prev = carousel.querySelector('.prev');
    var next = carousel.querySelector('.next');
    var step = function () {
      var card = track.querySelector('.video-card');
      return card ? card.getBoundingClientRect().width + 20 : 320;
    };
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  }

  /* --- Reveal ao rolar --- */
  var targets = document.querySelectorAll(
    '.hero-title, .hero-bottom, .band-portrait, .band-stats li, .chapter-head, .chapter-title, .chapter-text, .pull, .learn-list li, .tl-step, .video-card, .quotes figure, .deliver-list li, .notfor, .invest-anchor, .invest-price, .faq-item, .manoel-visual, .manoel-copy, .final'
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

  /* --- Highlight da seção ativa no rail --- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a'));
  var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); });
  if ('IntersectionObserver' in window && sections.filter(Boolean).length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.style.color = ''; l.querySelector('.idx').style.color = ''; });
          var i = sections.indexOf(entry.target);
          if (i > -1) {
            links[i].style.color = 'var(--terracotta)';
            links[i].querySelector('.idx').style.color = 'var(--terracotta)';
          }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }
})();
