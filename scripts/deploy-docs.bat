@echo off
REM GKIT Dokumentasjons Deploy Script (Windows)
REM Bygger og publiserer MkDocs til GitHub Pages

echo.
echo 🚀 GKIT Dokumentasjons Deploy
echo ================================
echo.

REM Sjekk at mkdocs er installert
where mkdocs >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ MkDocs er ikke installert.
    echo Installer med: pip install mkdocs mkdocs-material
    exit /b 1
)

echo 📦 Bygger MkDocs...
mkdocs build

if %errorlevel% neq 0 (
    echo ❌ MkDocs build feilet!
    exit /b 1
)

echo ✅ MkDocs build OK
echo.

echo 🌐 Deploy til GitHub Pages (gh-pages branch)...
mkdocs gh-deploy

if %errorlevel% neq 0 (
    echo ❌ Deploy feilet!
    exit /b 1
)

echo ✅ Deploy OK!
echo.
echo 📍 Dokumentasjonen er nå live på:
echo    https://golfklubb-it.github.io/gkit-website/
echo.
pause
