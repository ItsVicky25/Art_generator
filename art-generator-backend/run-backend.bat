@echo off
echo Starting Art Generator Backend...
echo.
echo Prerequisites:
echo - Java 17 or higher must be installed
echo - Maven must be installed and in PATH
echo.

if exist "mvn" (
    echo Found Maven, starting with Maven...
    mvn spring-boot:run
) else (
    echo Maven not found in PATH
    echo.
    echo Please install Maven or use an IDE like IntelliJ IDEA or Eclipse to run the project
    echo.
    echo Alternative: If you have Java installed, you can:
    echo 1. Install Maven from https://maven.apache.org/download.cgi
    echo 2. Add Maven to your PATH environment variable
    echo 3. Run: mvn spring-boot:run
    echo.
    echo Or run this project in your IDE as a Spring Boot application
    pause
)