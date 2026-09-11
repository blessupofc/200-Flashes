// Preserve campaign parameters even before the external UTM helper is available.
// This helper does not emit conversion events.
(function () {
  function decorate(link) {
    if (!link || !link.matches('a[data-checkout="kirvano"]')) return;
    var target = new URL(link.href);
    new URLSearchParams(window.location.search).forEach(function (value, key) {
      if ((key.indexOf('utm_') === 0 || ['fbclid', 'gclid', 'ttclid', 'src', 'sck'].indexOf(key) !== -1) && !target.searchParams.has(key)) {
        target.searchParams.set(key, value);
      }
    });
    link.href = target.toString();
  }
  function decorateAll() {
    document.querySelectorAll('a[data-checkout="kirvano"]').forEach(decorate);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorateAll, { once: true });
  else decorateAll();
  document.addEventListener('click', function (event) {
    if (event.target instanceof Element) decorate(event.target.closest('a[data-checkout="kirvano"]'));
  }, true);
})();
