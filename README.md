# Rieselzeit – Sanduhr-Web-App

3D-Sanduhr-Timer mit Kinder-Presets nach Alter. Installierbar auf iPhone, iPad, Android und PC, läuft nach dem ersten Öffnen auch offline.

## Inhalt des Ordners

| Datei / Ordner | Zweck |
|---|---|
| `index.html` | Die App |
| `manifest.webmanifest` | Name, Icons, Farben und Kürzel für die Installation |
| `sw.js` | Service Worker: speichert alles für die Offline-Nutzung |
| `lib/three.min.js` | 3D-Engine (three.js r128, MIT-Lizenz) |
| `fonts/` | Schriften Gloock und Manrope (SIL Open Font License) |
| `icons/` | App-Icons in allen Größen |

Alle Pfade sind relativ. Der Ordner funktioniert deshalb auch als Unterordner, zum Beispiel in deinem `lernapps`-Repo.

## Auf GitHub Pages veröffentlichen

1. Auf github.com dein Repo `sascharothenburg/lernapps` öffnen.
2. **Add file → Upload files** wählen und den kompletten Ordner `sanduhr` hineinziehen (mit allen Unterordnern).
3. Unten **Commit changes** klicken.
4. Nach etwa einer Minute ist die App erreichbar unter deiner Lernapps-Adresse plus `/sanduhr/`, zum Beispiel
   `https://sascharothenburg.github.io/lernapps/sanduhr/`
   (oder entsprechend über deine eigene Subdomain).

Wichtig: Der Service Worker funktioniert nur über `https://`. GitHub Pages erfüllt das automatisch. Direkt als Datei vom Rechner geöffnet läuft die App, aber ohne Offline-Modus und ohne Installation.

## Installieren

**iPhone / iPad (Safari)**
Seite öffnen → unten auf **Teilen** tippen → **Zum Home-Bildschirm**. Die App erscheint mit eigenem Icon und startet ohne Browserleiste. Der Knopf „Installieren“ in der App zeigt diesen Hinweis auch an.

**Android (Chrome)**
Seite öffnen → in der App auf **Installieren** tippen, oder im Chrome-Menü **App installieren** wählen. Langes Drücken auf das Icon zeigt Kürzel für 5, 12 und 25 Minuten.

**PC / Mac (Chrome oder Edge)**
Seite öffnen → in der App auf **Installieren** klicken, oder das Installations-Symbol rechts in der Adressleiste nutzen. Die App läuft dann in einem eigenen Fenster.

## Bedienung

- **Schnell:** 1 bis 60 Minuten
- **Kinder:** Presets nach Alter (Faustregel 2 bis 3 Minuten Konzentration pro Lebensjahr)
- **Eigene:** freie Zeit in Minuten und Sekunden
- **Atelier:** Sandfarbe, Holzart und Hintergrund
- **Tastatur (PC):** Leertaste = Start/Pause, `R` = Zurücksetzen
- **Ziehen** auf der Sanduhr kippt sie leicht.
- Direktlink mit fester Zeit: `…/sanduhr/?min=15`

## Gut zu wissen

- Die Zeit läuft auch weiter, wenn die App im Hintergrund ist. Der Glockenton kommt aber nur, wenn die App sichtbar ist. iPhone und iPad pausieren Web-Apps im Hintergrund.
- Während der Timer läuft, bleibt der Bildschirm an, sofern das Gerät es erlaubt (iOS ab 16.4, Android, Chrome/Edge am PC).
- Einstellungen werden pro Gerät gespeichert.

## Updates einspielen

Nach Änderungen an der App in `sw.js` die Zeile `const VERSION = "rieselzeit-v1";` hochzählen (`v2`, `v3` …) und mit hochladen. Die Geräte holen sich die neue Fassung dann beim nächsten Start.
