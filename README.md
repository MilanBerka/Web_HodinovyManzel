# Hodinový Manžel – Jednostránkový web (One-Page Web Template)

Jednoduchá, moderní, rychlá a plně responzivní jednostránková webová prezentace pro službu **Hodinový manžel** (řemeslnické práce, opravy v domácnosti, montáž nábytku, elektro a voda).

Projekt je vytvořen v čistém HTML5, moderním CSS3 a vanilla JavaScriptu bez zbytečných závislostí a build nástrojů. Lze jej okamžitě otevřít v libovolném prohlížeči nebo nasadit na bezplatný hosting (GitHub Pages, Netlify, Vercel).

---

## 📁 Struktura projektu

```text
Web_HodinovyManzel/
├── .gitignore          # Ignorované soubory (OS, editory)
├── index.html          # Hlavní jednostránkový web se všemi sekcemi
├── README.md           # Dokumentace k projektu a návod k nasazení
├── css/
│   └── style.css       # Kompletní moderní responzivní styly s CSS proměnnými
└── js/
    └── main.js         # Obsluha mobilního menu, formuláře a efektů
```

---

## 🚀 Jak web spustit a prohlížet

### 1. Přímo v prohlížeči (nejjednodušší)
Dvakrát klikněte na soubor `index.html` nebo v terminálu spusťte:
```bash
open index.html
```

### 2. Pomocí lokálního serveru (doporučeno pro testování)
Pokud máte nainstalovaný Python:
```bash
python3 -m http.server 8000
```
Poté otevřete v prohlížeči adresu [http://localhost:8000](http://localhost:8000).

---

## 🛠️ Jak projekt upravit podle svých potřeb

Všechny texty a kontaktní údaje jsou přehledně umístěné v souboru `index.html`:

1. **Telefonní číslo a E-mail**:
   - V `index.html` vyhledejte `+420 777 123 456` a `info@hodinovymanzel.cz` a nahraďte je svými údaji (včetně odkazů `tel:` a `mailto:`).
2. **Lokalita / Působnost**:
   - Upravte oblast, kde nabízíte své služby (např. *Praha a okolí*, *Brno*, *Plzeň* atd.).
3. **Ceník**:
   - V sekci `#cenik` můžete upravit hodinovou sazbu, balíčky či cenu dopravy.
4. **Barevné schéma**:
   - V souboru `css/style.css` v bloku `:root` lze snadno změnit primární i akcentní barvy (`--color-primary`, `--color-accent`).

---

## 🌿 Práce s Git (Verzování)

Projekt je již inicializován v Gitu s výchozí větví `main`.

### Užitečné Git příkazy:

- **Zjištění stavu změn**:
  ```bash
  git status
  ```
- **Zaznamenání změn (commit)**:
  ```bash
  git add .
  git commit -m "Úprava kontaktů a ceníku"
  ```
- **Propojení s GitHubem / GitLabem**:
  1. Vytvořte nový prázdný repozitář na GitHubu (např. `Web_HodinovyManzel`).
  2. Propojte jej a odešlete kód:
     ```bash
     git remote add origin https://github.com/VASE_UZIVATELSKE_JMENO/Web_HodinovyManzel.git
     git push -u origin main
     ```

---

## 🌐 Možnosti bezplatného nasazení (Hosting)

- **GitHub Pages**:
  - V nastavení repozitáře na GitHubu (`Settings` -> `Pages`) vyberte větev `main` a složku `/ (root)`. Váš web bude během 1–2 minut dostupný online.
- **Netlify / Vercel**:
  - Stačí připojit GitHub repozitář nebo složku přetáhnout metodou drag & drop do Netlify Drop.
