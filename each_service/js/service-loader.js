/**
 * SUDDDRONE Service Page Loader
 * Reads ?service=<slug> and populates the page with service data
 */
(function() {
  'use strict';

  const SLUG_ALIASES = { 'humanitarian-logistics': 'drone-cargo-delivery' };

  function getServiceSlug() {
    const params = new URLSearchParams(window.location.search);
    let slug = params.get('service') || 'drone-cargo-delivery';
    return SLUG_ALIASES[slug] || slug;
  }

  function loadService() {
    const slug = getServiceSlug();
    const service = typeof SUDDDRONE_SERVICES !== 'undefined' && SUDDDRONE_SERVICES[slug];

    if (!service) {
      // Redirect to default if unknown slug
      window.location.href = 'index.html?service=drone-cargo-delivery';
      return;
    }

    // Page title & meta
    document.title = service.title + ' | SUDDDRONE';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', service.shortDescription);

    // Category
    const categoryEl = document.querySelector('[data-service-category]');
    if (categoryEl) {
      const link = categoryEl.querySelector('a');
      const textEl = categoryEl.querySelector('.category-title');
      if (link) link.href = 'index.html?service=' + slug;
      if (textEl) textEl.textContent = service.category;
      const bottomText = categoryEl.querySelector('.category-title.hover-white');
      if (bottomText) bottomText.textContent = service.category;
    }

    // Title (H1)
    const titleEl = document.querySelector('[data-service-title]');
    if (titleEl) titleEl.textContent = service.title;

    // Short description
    const descEl = document.querySelector('[data-service-description]');
    if (descEl) descEl.textContent = service.shortDescription;

    // Info stats
    const infoEl = document.querySelector('[data-service-info]');
    if (infoEl && service.infoStats && service.infoStats.length >= 2) {
      const parts = infoEl.querySelectorAll('.info-small-dark');
      if (parts.length >= 2) {
        parts[0].textContent = service.infoStats[0].label + ': ' + service.infoStats[0].value;
        parts[1].textContent = service.infoStats[1].label + ': ' + service.infoStats[1].value;
      }
    }

    // Banner image
    const bannerEl = document.querySelector('[data-service-banner]');
    if (bannerEl && service.bannerImage) {
      bannerEl.style.backgroundImage = 'url("' + service.bannerImage + '")';
    }

    // Body content
    const bodyEl = document.getElementById('Service-details');
    if (bodyEl && service.bodyHtml) {
      const richtext = bodyEl.querySelector('.hero-rich-text-style, .w-richtext');
      if (richtext) {
        richtext.innerHTML = service.bodyHtml.trim();
      }
    }

    // Pagination
    const prevLink = document.querySelector('[data-service-prev]');
    const nextLink = document.querySelector('[data-service-next]');
    if (prevLink) {
      prevLink.href = 'index.html?service=' + service.prevSlug;
      const prevText = prevLink.querySelector('.prev-portfolio');
      if (prevText) prevText.textContent = 'Prev: ' + service.prevTitle;
    }
    if (nextLink) {
      nextLink.href = 'index.html?service=' + service.nextSlug;
      const nextText = nextLink.querySelector('.next-portfolio');
      if (nextText) nextText.textContent = 'Next: ' + service.nextTitle;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadService);
  } else {
    loadService();
  }
})();
