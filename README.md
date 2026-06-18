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

Nettstedet er salgsorientert med tillitsbyggende seksjoner: tillitsstripe,
nøkkeltall, «hvorfor velge oss», kostnadsdekning, prosess-steg,
kundeuttalelser, FAQ og tydelige call-to-action (gratis vurdering / ring).

## Plassholdere som bør byttes ut før lansering

- **Kundeuttalelser** på forsiden er illustrative/anonymiserte og må erstattes
  med ekte, samtykkede sitater (eller fjernes). Se seksjonen merket
  `KUNDEUTTALELSER (plassholder ...)` i `index.html`.
- **Nøkkeltall** (f.eks. «15+ års erfaring») er anslag og bør verifiseres.
- **Portrettet** er en nøytral SVG-plassholder. Bytt ut SVG-en i `.portrait`
  med et faktisk bilde.
- **Kostnads-/dekningstekst** er generell informasjon og bør kvalitetssikres
  juridisk for det enkelte firma.

## Merknader

- Kontaktskjemaet har klientside-bekreftelse og ingen backend; koble til en
  e-post-/skjematjeneste ved produksjonssetting.
- Markedsføringen er holdt edruelig i tråd med advokaters
  markedsføringsregler – unngå å love bestemte resultater.
