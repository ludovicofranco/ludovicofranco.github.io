# Sito di Ludovico Franco

Sito statico: HTML, un foglio di stile, un piccolo script. Nessun framework,
nessuna build. Si carica così com'è. Testi in inglese.

## Struttura

```
index.html                          home
about/index.html                    biografia + bio in tre lunghezze da copiare
research/index.html                 ricerca, talk, workshop
publications/index.html             elenco pubblicazioni
publications/nomadic-ear/index.html scheda del paper — meta tag Google Scholar
discography/index.html              dischi e live
contact/index.html                  contatti
papers/nomadic-ear-2026.pdf         full text
style.css                           colori, caratteri, misure
site.js                             pulsanti "copy" delle bio
favicon.svg                         icona
```

Gli indirizzi puntano a **https://ludovicofranco.github.io**. Se un giorno
colleghi un dominio tuo, cerca `ludovicofranco.github.io` nei file HTML e
sostituisci.

## Le due cose da non spostare

`publications/nomadic-ear/` e `papers/nomadic-ear-2026.pdf`. Sono gli indirizzi
che Google Scholar sta indicizzando e che compaiono nei meta tag e nei link
esterni. Cambiare quei percorsi significa ricominciare da capo l'attesa.

Il tag decisivo, nella scheda del paper:

```html
<meta name="citation_pdf_url" content="https://ludovicofranco.github.io/papers/nomadic-ear-2026.pdf">
```

## Aggiornare il sito

Dal browser, su github.com: apri il file, clicca la matita, modifica,
**Commit changes**. Oppure *Add file → Upload files* e trascina i file nuovi
sopra i vecchi: quelli con lo stesso nome vengono sostituiti.

## Dove mettere le mani

- **Colori, caratteri, larghezza della colonna**: in cima a `style.css`, blocco
  `:root`. Il tema scuro sta nel blocco `@media (prefers-color-scheme: dark)`
  subito sotto e segue l'impostazione di sistema di chi visita.
- **Aggiungere una pubblicazione**: copia il blocco `<li>` in
  `publications/index.html` e duplica la cartella `publications/nomadic-ear/`
  come modello per la scheda. Il PDF va in `papers/`, con un nome definitivo.
- **Dischi e ascolti**: in `discography/index.html` ci sono commenti HTML nei
  punti dove aggiungere il terzo album del 2025, le formazioni e i link agli
  ascolti. Gli embed di Bandcamp o SoundCloud si incollano direttamente.
- **Altri profili**: in `contact/index.html`, commento HTML con il modello.

## Farsi trovare da Google Scholar

Scholar non ha un pulsante "indicizzami": arriva seguendo i link. Quindi
l'indirizzo del sito va messo nel campo *Websites* del profilo ORCID, nel record
Zenodo del paper e su LinkedIn. Poi si aspetta — settimane, a volte mesi.

Questo file non fa parte del sito: se preferisci il repository pulito, puoi
cancellarlo senza conseguenze.
