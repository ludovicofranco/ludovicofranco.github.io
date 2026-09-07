/* Ludovico Franco — script unico del sito.
   Fa due cose sole: ricorda il tema scelto e copia le bio. */
(function () {
  var root = document.documentElement;

  /* --- tema --- */
  try {
    var saved = localStorage.getItem('tema');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) { /* storage bloccato: si usa il tema di sistema */ }

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
  }

  var btn = document.getElementById('theme');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('tema', next); } catch (e) {}
    });
  }

  /* --- copia bio --- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!b) return;
    var card = b.closest('.bio');
    if (!card) return;
    var body = card.querySelector('[data-bio]');
    if (!body) return;
    var txt = (body.innerText || body.textContent || '').trim();
    var ok = function () {
      b.textContent = 'Copiato';
      setTimeout(function () { b.textContent = 'Copia'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(ok, function () {
        b.textContent = 'Seleziona e copia';
      });
    } else {
      b.textContent = 'Seleziona e copia';
    }
  });

  /* --- anno nel piede --- */
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
