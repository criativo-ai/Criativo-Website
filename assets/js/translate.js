/* =====================================================================
   Google Translate (EN / AR / FR) — shared by redesigned pages.
   Needs in the page: <select id="langSelect"> and <div id="google_translate_element" hidden>.
   Load Google's element.js after this file.
   ===================================================================== */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ar,fr',
    autoDisplay: false
  }, 'google_translate_element');
}

(function () {
  const select = document.getElementById('langSelect');
  if (!select) return;
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/(\w+)/);
  select.value = match ? match[1] : 'en';

  select.addEventListener('change', function () {
    const lang = this.value;
    const host = location.hostname;
    const domains = [host, '.' + host.replace(/^www\./, '')];
    const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Clear any existing translation cookie on every scope Google may have set it on
    document.cookie = 'googtrans=; path=/; ' + expired;
    domains.forEach(function (d) { document.cookie = 'googtrans=; path=/; domain=' + d + '; ' + expired; });
    if (lang !== 'en') document.cookie = 'googtrans=/en/' + lang + '; path=/';
    location.reload();
  });
})();
