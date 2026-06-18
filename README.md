# Advokatfirmaet Torgersen – nettsted

Statisk nettsted for Advokatfirmaet Torgersen, bygget i ren HTML/CSS/JS.

Stilen er inspirert av [avco.no](https://avco.no) – et rolig, profesjonelt
advokatuttrykk med sort og krem/beige, serif-overskrifter, luftige seksjoner
og en varm gull-aksent. Innholdet (tekst og struktur) er hentet fra
[advokattorgersen.no](https://advokattorgersen.no).

## Sider

| Fil | Innhold |
| --- | --- |
| `index.html` | Forside med intro, fagområder og kontakt-CTA |
| `om-firmaet.html` | Om firmaet og CV for advokat Anette Torgersen |
| `fagomrader.html` | Personskade, voldsoffererstatning, trygderett, mekling |
| `kontakt.html` | Kontaktinfo, kontaktskjema og kart |

## Struktur

```
.
├── index.html
├── om-firmaet.html
├── fagomrader.html
├── kontakt.html
├── css/style.css
└── js/main.js
```

## Kjøre lokalt

Åpne `index.html` direkte i nettleser, eller server lokalt:

```bash
python3 -m http.server 8000
# Åpne http://localhost:8000
```

## Merknader

- Kontaktskjemaet har klientside-bekreftelse og ingen backend; koble til en
  e-post-/skjematjeneste ved produksjonssetting.
- Portrettet er en nøytral plassholder. Bytt ut SVG-en i `.portrait` med et
  faktisk bilde ved behov.
