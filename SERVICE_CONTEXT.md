# 📋 SERVICE CONTEXT: Hodinový Manžel

Tento soubor slouží jako **hlavní zdroj pravdy (Source of Truth)** pro AI asistenta (Antigravity) i pro vás. 
Kdykoliv zde upravíte údaje, poznámky nebo instrukce a řeknete agentovi *"Aktualizuj web podle SERVICE_CONTEXT.md"*, agent tyto změny promítne do webu (`index.html`), commitne a nasadí.

---

## 1. Identita a kontaktní údaje
- **Název služby / projektu:** Hodinový Manžel
- **Hlavní claim (motto):** Šikovné ruce pro váš domov, zahradu i firmu
- **Jméno řemeslníka:** *(Doplňte např. Jan Novák nebo ponechte obecné)*
- **Telefon:** `+420 777 123 456`
- **E-mail:** `info@hodinovymanzel.cz`
- **Oblast působnosti:** Praha a Středočeský kraj (dojezd cca do 30 km)
- **Pracovní doba:** Pondělí – Neděle: 8:00 – 20:00 (včetně víkendů po dohodě)
- **Rychlost reakce:** Odpověď na poptávku obvykle do 30 minut

---

## 2. Cenová politika
- **Základní hodinová sazba:** `450 Kč / hod`
  - Účtování po každé započaté půlhodině.
  - Běžný drobný spotřební materiál (hmoždinky, standardní vruty) je v ceně.
- **Zvýhodněný půldenní balíček:** `1 600 Kč / 4 hodiny` (vychází na 400 Kč/hod)
  - Včetně dopravy po městě zdarma.
- **Doprava a výjezd:**
  - Paušál po městě: `300 Kč`
  - Mimo město: `12 Kč / km`
  - Možnost nákupu specifického materiálu v hobby marketu (Hornbach, Bauhaus, OBI).
- **Větší zakázky:** Individuální pevná kalkulace předem (kuchyně, větší malování).

---

## 3. Nabízené služby (Core nabídka)

### A. Montáž a demontáž nábytku
- Montáž skříní, postelí, komod a stolů (IKEA, Jysk, XXXLutz, Sconto, atd.)
- Úpravy a zavěšení kuchyňských skříněk a pracovních desek
- Demontáž a příprava starého nábytku k odvozu

### B. Voda, odpady a sanita
- Výměna a zapojení vodovodních dřezových a umyvadlových baterií
- Výměna a čištění sifonů, drobné odpady
- Připojení pračky, myčky a sušičky na vodu a odpad
- Přetmelení starého silikonu u vany, sprchového koutu a umyvadla

### C. Elektroinstalace a svítidla (základní)
- Montáž a zapojení lustrů, stropních svítidel, bodovek a LED pásků
- Výměna vypínačů, poškozených nebo uvolněných zásuvek
- Zapojení vestavných spotřebičů a varných desek

### D. Vrtání a montáž na zeď
- Vrtání do všech typů zdiva: betonový panel, plná cihla, pórobeton (Ytong), sádrokarton
- Bezpečné zavěšení velkých televizí na stěnu (polohovatelné držáky)
- Montáž garnýží, záclonových tyčí, rolet a žaluzií
- Věšení těžkých zrcadel, obrazů a policových systémů

### E. Drobné opravy, tmelení a malování
- Tmelení a sádrování prasklin, děr po starých hmoždinkách a poškozených rohů
- Lokální výmalba pokojů, opravy stěn a nátěry soklů
- Seřízení drhnoucích oken a dveří, promazání pantů, výměna zámků a vložek FAB

### F. Zahrada a údržba kolem domu
- Sekání trávy a dosekávání okrajů
- Stříhání a tvarování živých plotů a keřů
- Montáž zahradního nábytku, pergol, trampolín a přístřešků
- Tlakové mytí teras, chodníků a venkovní dlažby (WAP)

---

## 4. Co ZÁSADNĚ NEDĚLÁM (Mantinely pro AI)
AI asistent nesmí na web svévolně přidávat následující činnosti (předejití falešným očekáváním zákazníků):
- ❌ Plynoinstalace a revize plynových kotlů (pouze certifikovaní plynaři).
- ❌ Velké bourací a nosné stavební zásahy do budov.
- ❌ Pokrývačské práce a opravy střech ve výškách.
- ❌ Kompletní nová elektroinstalace celého domu s revizní zprávou.

---

## 5. Klíčové výhody (USP - Proč si vybrat mě)
1. **Dochvilnost a spolehlivost:** Přesný čas příjezdu, který platí.
2. **Vlastní profesionální vybavení:** Široká paleta nářadí (aku, vrtací kladiva, detektor vedení ve zdi, laser).
3. **Čistota:** Po dokončení prací vždy úklid, zametení a odvoz obalů.
4. **Předem známá cena:** Žádné skryté poplatky po skončení práce.

---

## 6. Pravidla a instrukce pro AI agenta (Antigravity)
Kdykoliv uživatel požádá o aktualizaci webu:
1. **Zkontroluj tento soubor (`SERVICE_CONTEXT.md`)** jako primární referenci.
2. **Synchronizuj `index.html`:** Pokud došlo ke změně cen, telefonního čísla, e-mailu nebo lokalit, promítni je do všech výskytů na stránce (hlavička, hero, ceník, kontaktní sekce, patička).
3. **Zachovej strukturu a styl:** Neměň design, CSS třídy ani responzivní uspořádání, pokud to uživatel výslovně nepožaduje.
4. **Respektuj mantinely:** Nikdy negeneruj služby uvedené v sekci *"Co ZÁSADNĚ NEDĚLÁM"*.
5. **Git workflow:** Po provedení změn zkontroluj kód, vytvoř srozumitelný git commit a odešli (`git push origin main`), aby se automaticky spustil GitHub Actions deploy na GitHub Pages.
