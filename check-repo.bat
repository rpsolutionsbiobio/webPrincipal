@echo off
echo Verificando repositorio...
echo.
echo Repositorio remoto configurado:
git config --get remote.origin.url
echo.
echo Estado actual:
git status --short
echo.
echo Rama actual:
git branch --show-current
echo.
echo Ultimo commit:
git log --oneline -1
echo.
pause