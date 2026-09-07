/* Ludovico Franco — the only script on the site.
   It does one thing: copy a bio to the clipboard. Plus the footer year. */
(function () {
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!b) return;
    var card = b.closest('.bio');
    if (!card) return;
    var body = card.querySelector('[data-bio]');
    if (!body) return;
    var txt = (body.innerText || body.textContent || '').trim();
    var ok = function () {
      b.textContent = 'copied';
      setTimeout(function () { b.textContent = 'copy'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(ok, function () { b.textContent = 'select and copy'; });
    } else {
      b.textContent = 'select and copy';
    }
  });

  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
