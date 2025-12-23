@echo off
chcp 65001 >nul
echo ====================================
echo    PUSH CODE LEN GITHUB
echo ====================================
echo.

REM Chuyen den thu muc project
cd /d "%~dp0"
echo Dang o thu muc: %CD%
echo.

REM Kiem tra xem co package.json khong
if not exist "package.json" (
    echo LOI: Khong tim thay package.json!
    echo Vui long chay script nay trong thu muc project!
    pause
    exit /b 1
)

REM Cau hinh git user
echo [1/5] Cau hinh Git user...
git config user.name "quochuy1012"
git config user.email "nguyenphamquochuy1012@gmail.com"
echo OK!
echo.

REM Add files (chi add cac file can thiet)
echo [2/5] Them file vao staging...
git add .gitignore
git add package.json package-lock.json
git add next.config.mjs tsconfig.json components.json postcss.config.mjs next-env.d.ts
git add app/
git add components/
git add lib/
git add hooks/
git add public/
git add *.md *.bat *.ps1
echo OK!
echo.

REM Commit
echo [3/5] Commit code...
git commit -m "Update: Hero section with new description, add Facebook to footer, update education info"
if errorlevel 1 (
    echo LOI: Commit that bai! Co the chua co file nao de commit hoac khong co thay doi.
    pause
    exit /b 1
)
echo OK!
echo.

REM Ket noi voi GitHub
echo [4/5] Ket noi voi GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/quochuy1012/Blog.git
git branch -M main
echo OK!
echo.

REM Push
echo [5/5] Push code len GitHub...
git push -u origin main
if errorlevel 1 (
    echo.
    echo ====================================
    echo    CAN XAC THUC GITHUB!
    echo ====================================
    echo.
    echo Neu gap loi authentication:
    echo 1. GitHub se yeu cau username va password
    echo 2. Username: quochuy1012
    echo 3. Password: Dung Personal Access Token (khong dung password GitHub)
    echo.
    echo Cach tao Personal Access Token:
    echo - Vao GitHub.com ^> Settings ^> Developer settings ^> Personal access tokens ^> Tokens (classic)
    echo - Click "Generate new token (classic)"
    echo - Chon quyen: repo (full control)
    echo - Copy token va dung no thay cho password
    echo.
) else (
    echo.
    echo ====================================
    echo    HOAN TAT!
    echo ====================================
    echo.
    echo Code da duoc push len GitHub thanh cong!
    echo Repository: https://github.com/quochuy1012/Blog
    echo.
)

pause


