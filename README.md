# Sito di Ludovico Franco — istruzioni

Sito statico: solo HTML, CSS e un piccolo file JavaScript. Nessun framework,
nessuna build, nessuna dipendenza da installare. Si carica così com'è.

## Cosa c'è dentro

```
index.html                          home
publications/index.html             elenco pubblicazioni e interventi
publications/nomadic-ear/index.html scheda del paper (con i meta tag per Google Scholar)
papers/nomadic-ear-2026.pdf         il full text
style.css                           tutti i colori e la tipografia
site.js                             tema chiaro/scuro e pulsanti "copia"
```

## Indirizzi già configurati

I file puntano a **https://ludovicofranco.github.io** — canonical, Open Graph e il tag
`citation_pdf_url` della scheda del paper. Non devi sostituire nulla.

Se un giorno colleghi un dominio tuo, gli indirizzi da aggiornare sono cinque,
in tre file: `index.html` (1), `publications/index.html` (1),
`publications/nomadic-ear/index.html` (3). Cerca `ludovicofranco.github.io` e
sostituisci.

Il più importante è questo, nella scheda del paper:

```html
<meta name="citation_pdf_url" content="https://ludovicofranco.github.io/papers/nomadic-ear-2026.pdf">
```

È il tag con cui Google Scholar risale dalla pagina al full text.

## Pubblicare su GitHub Pages, dal browser

1. Crea un account su **github.com**, se non ce l'hai.
2. In alto a destra, **+ → New repository**.
3. Come nome del repository scrivi esattamente **`ludovicofranco.github.io`**, esattamente così. Questo è importante: solo con questo
   nome il sito sta nella radice del dominio e i percorsi tipo
   `/papers/nomadic-ear-2026.pdf` funzionano come sono scritti.
4. Metti il repository su **Public**, non spuntare "Add a README file", e crea.
5. Nella pagina che si apre clicca **uploading an existing file**.
6. Trascina dentro **il contenuto** di questa cartella — cioè `index.html`,
   `style.css`, `site.js` e le cartelle `papers` e `publications`. Non
   trascinare la cartella che le contiene: devono finire alla radice del
   repository.
7. In fondo alla pagina, **Commit changes**.
8. Vai su **Settings → Pages**. Sotto *Source* scegli *Deploy from a branch*,
   ramo `main`, cartella `/ (root)`, e salva.
9. Dopo un paio di minuti il sito è online su `https://ludovicofranco.github.io`.

Per aggiornarlo in futuro: apri il file dal browser su GitHub, clicca la matita,
modifica, **Commit changes**. Oppure ricarica i file con *Add file → Upload files*.

## Se un giorno compri un dominio tuo

Da **Settings → Pages → Custom domain** lo colleghi in due minuti. I percorsi
restano identici e GitHub reindirizza i vecchi indirizzi `github.io`, quindi non
perdi né i link né l'indicizzazione. Ricordati solo di rifare la sostituzione di
`ludovicofranco.github.io` con il nuovo indirizzo nei tre file.

## Farsi trovare da Google Scholar

Scholar non ha un pulsante "indicizzami": arriva seguendo i link. Quindi, appena
il sito è online:

- metti l'indirizzo nel campo **Websites** del tuo profilo ORCID;
- aggiungilo al record Zenodo del paper;
- linkalo da LinkedIn e da eventuali pagine istituzionali.

Poi si aspetta: settimane, a volte mesi. Quando Scholar indicizzerà il PDF,
nel tuo profilo comparirà una seconda voce del paper, quella con il link al
testo: a quel punto uniscila con quella inserita a mano.

## Dove mettere le mani

- **Colori e caratteri**: tutto in cima a `style.css`, nel blocco `:root`.
- **Aggiungere una pubblicazione**: duplica il blocco `<article class="pub">`
  in `publications/index.html` e crea una nuova cartella sotto `publications/`
  copiando `nomadic-ear/index.html` come modello. Il PDF va in `papers/`, con un
  nome che non cambierà più.
- **Album e ascolti**: nella home, sezione `#musica`, ci sono commenti HTML che
  indicano dove aggiungere il terzo album del 2025 e i link agli ascolti.
