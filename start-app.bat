@echo off
echo ===============================================
echo    🎨 ART GENERATOR - Starting Application
echo ===============================================
echo.

echo 🚀 Starting React Frontend...
cd "Art_generator\art"
start "React Frontend" cmd /k "npm start"

echo.
echo ⏳ Waiting 5 seconds for frontend to start...
timeout /t 5

echo.
echo 📡 Frontend Status:
echo ✅ React App: http://localhost:3001 (or http://localhost:3000)
echo.
echo 🔧 Backend Status:
echo ⚠️  Java Backend: Needs Maven to run
echo.
echo ===============================================
echo    📱 READY TO USE!
echo ===============================================
echo.
echo 🎯 Open your browser and go to:
echo    👉 http://localhost:3001
echo.
echo 🎨 Features Available:
echo    ✅ Beautiful UI with animations
echo    ✅ Image upload and preview  
echo    ✅ Stylish transformation interface
echo    ✅ Google API integration (when backend runs)
echo.
echo 💡 To enable Google API transformations:
echo    1. Install Maven or use an IDE
echo    2. Run the backend in art-generator-backend folder
echo.
pause