@echo off
chcp 65001 >nul
echo ====================================
echo   KHOI DONG BLOG SERVER
echo ====================================
echo.

cd /d "%~dp0"

echo Dang kiem tra dependencies...
call npm install
if errorlevel 1 (
    echo Loi khi cai dat dependencies!
    pause
    exit /b 1
)

echo.
echo Dang xoa cache...
if exist .next rmdir /s /q .next

echo.
echo Dang khoi dong server...
echo.
echo Server se chay tai: http://localhost:3000
echo.
echo Nhan Ctrl+C de dung server
echo.
echo ====================================
echo.

call node node_modules\.bin\next dev

if errorlevel 1 (
    echo.
    echo Loi khi khoi dong server!
    echo Thu chay: npm run dev
    pause
)
