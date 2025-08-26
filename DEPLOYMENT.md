# 🚀 Deployment Guide - TeLLiiX Portfolio

## 📋 Voraussetzungen

- GitHub Account
- Vercel Account (kostenlos)
- Git installiert auf deinem Computer

## 🔧 Schritt-für-Schritt Anleitung

### 1. GitHub Repository erstellen

1. Gehe zu [GitHub.com](https://github.com) und melde dich an
2. Klicke auf das "+" Symbol oben rechts und wähle "New repository"
3. Gib folgende Details ein:
   - **Repository name**: `telliix-portfolio`
   - **Description**: `TeLLiiX Portfolio Website - Modern Next.js Portfolio`
   - **Visibility**: Public (oder Private, wenn du möchtest)
   - **Initialize**: Leer lassen (wir haben bereits Code)
4. Klicke auf "Create repository"

### 2. Code zu GitHub pushen

Führe diese Befehle in deinem Projektordner aus:

```bash
# Remote Repository hinzufügen (ersetze USERNAME mit deinem GitHub Username)
git remote add origin https://github.com/USERNAME/telliix-portfolio.git

# Code pushen
git branch -M main
git push -u origin main
```

### 3. Vercel Deployment

1. Gehe zu [Vercel.com](https://vercel.com) und melde dich an
2. Klicke auf "New Project"
3. Wähle "Import Git Repository"
4. Wähle dein `telliix-portfolio` Repository aus
5. Vercel erkennt automatisch, dass es ein Next.js Projekt ist
6. Klicke auf "Deploy"

### 4. Domain konfigurieren (Optional)

Nach dem Deployment kannst du:
- Eine benutzerdefinierte Domain hinzufügen
- Die automatisch generierte Vercel URL verwenden (z.B. `telliix-portfolio.vercel.app`)

## 🎯 Deployment Checkliste

- [ ] GitHub Repository erstellt
- [ ] Code erfolgreich gepusht
- [ ] Vercel Projekt erstellt
- [ ] Deployment erfolgreich
- [ ] Website ist erreichbar
- [ ] Alle Funktionen funktionieren

## 🔄 Updates deployen

Für zukünftige Updates:

```bash
# Änderungen committen
git add .
git commit -m "Update description"

# Zu GitHub pushen
git push origin main
```

Vercel deployt automatisch bei jedem Push!

## 🛠️ Troubleshooting

### Build Fehler
- Überprüfe die Konsole in Vercel für Fehlermeldungen
- Stelle sicher, dass alle Dependencies installiert sind
- Teste lokal mit `npm run build`

### Performance Probleme
- Überprüfe die Vercel Analytics
- Optimiere Bilder und Assets
- Verwende Next.js Image Optimization

## 📞 Support

Bei Problemen:
1. Überprüfe die Vercel Logs
2. Teste lokal mit `npm run dev`
3. Überprüfe die GitHub Issues

---

**TeLLiiX Portfolio** - Erfolgreich deployed! 🎉
