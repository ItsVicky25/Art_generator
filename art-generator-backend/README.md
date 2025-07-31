# Art Generator Backend

A Spring Boot REST API for image transformation using AI services.

## Features

- Image transformation using multiple AI services
- Support for various transformation types:
  - Photo to Art
  - Style Transfer
  - Background Removal
  - Color Enhancement
  - Vintage Filters
  - Sketch Making
- CORS enabled for frontend integration
- RESTful API design

## API Endpoints

### Transform Image
```
POST /api/images/transform
Content-Type: application/json

{
  "imageData": "data:image/jpeg;base64,...",
  "transformType": "photo-to-art",
  "intensity": 50,
  "style": "artistic"
}
```

### Remove Background
```
POST /api/images/remove-background
Content-Type: application/json

"data:image/jpeg;base64,..."
```

### Health Check
```
GET /api/images/health
```

### Supported Transformations
```
GET /api/images/supported-transformations
```

## Setup Instructions

1. **Prerequisites**
   - Java 17 or higher
   - Maven 3.6 or higher

2. **Installation**
   ```bash
   # Clone or download the project
   cd art-generator-backend
   
   # Install dependencies
   mvn clean install
   
   # Run the application
   mvn spring-boot:run
   ```

3. **Alternative: Run with Java directly**
   ```bash
   # Compile
   mvn clean package
   
   # Run
   java -jar target/art-generator-backend-1.0.0.jar
   ```

## Configuration

The application is configured with Google Gemini API for AI-powered image transformations:

```yaml
google:
  api-key: "AIzaSyAW1Ee5bvqLSH4Z_ylxvWarwDAIeHgXj0I"
  gemini:
    base-url: "https://generativelanguage.googleapis.com/v1beta"
    model: "gemini-2.0-flash-exp"
  imagen:
    model: "imagen-3-generate-001"
```

**Note**: The Google API key is already configured in the application. For production deployment, consider using environment variables or secure configuration management.

## API Integration

The backend is configured to work with the React frontend running on `http://localhost:3000`. CORS is properly configured for seamless integration.

## AI Services Used

- **Google Gemini 2.0 Flash**: Advanced multimodal AI for image generation and transformation
- **Google Imagen 3/4**: State-of-the-art text-to-image generation
- **Fallback System**: Graceful fallback to demo mode if API calls fail

## Features

- **Smart API Integration**: Automatically uses Google Gemini API when available
- **Robust Fallback**: Falls back to demo mode if API fails
- **Multiple Transform Types**: Supports photo-to-art, style transfer, vintage filters, sketches, and more
- **High-Quality Results**: Leverages Google's latest AI models for professional results

## Development

The application runs on port `8080` by default. Access the API at:
- Base URL: `http://localhost:8080/api`
- Health Check: `http://localhost:8080/api/images/health`

## Testing

Test the API using curl:

```bash
curl -X GET http://localhost:8080/api/images/health
curl -X GET http://localhost:8080/api/images/supported-transformations
```