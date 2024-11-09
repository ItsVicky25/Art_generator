# Artify Studio - Interactive AI Art Generator

**Artify Studio** is an innovative, AI-powered web application that enables users to transform their photos into unique, stylized artworks using advanced neural style transfer. With Artify Studio, you can effortlessly turn your images into captivating art pieces with extensive customization options.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [License](#license)

## Project Overview 🖼️

Artify Studio is a web-based tool for creating AI-generated artwork from user-uploaded images. It provides an easy-to-use interface where users can:
- **Upload Images**
- **Choose Art Styles**
- **Blend Multiple Styles**
- **Experiment with Intensity and Effects**

The goal is to empower users to express their creativity through AI in a seamless, intuitive, and visually engaging platform.
  
## Features 🌟

- **📸 Image Upload:** Upload personal photos to create artwork.
- **🎨 Diverse Art Styles:** Choose from a wide variety of art-inspired styles.
- **🖌️ Style Blending:** Combine different styles for unique visual effects.
- **🔧 Adjustments and Filters:** Modify intensity, brightness, contrast, and other image properties.
- **⚡ Instant Preview and Download:** Real-time preview of the transformation and easy download options.
- **📱 Responsive UI:** Works across various devices, including mobile and desktop.

## Tech Stack 🛠️

- **Frontend:** React.js, HTML/CSS, JavaScript
- **Backend:** Flask, Python
- **Machine Learning:** NumPy, TensorFlow/PyTorch (for deep learning models)
- **Deployment:** Vercel/Netlify (Frontend), Heroku/AWS/Google Cloud (Backend)

##project-structure

###Frontend File Structure

Artify-Studio/
├── public/                           # Public files like index.html
├── src/                              # Source code for the app
│   ├── assets/                       # Images, icons, styles, etc.
│   ├── components/                   # All reusable components
│   │   ├── Header.js                 # Header component
│   │   ├── Sidebar.js                # Sidebar for navigating styles, options
│   │   ├── ImageUpload.js            # Image upload component
│   │   ├── StyleSelector.js          # Style selection dropdown/component
│   │   ├── ImagePreview.js           # Preview of the transformed image
│   │   ├── StyleAdjustments.js       # Controls for adjusting style intensity
│   │   ├── EffectControls.js         # Adjustments like brightness, contrast
│   │   ├── LoadingSpinner.js         # Loading spinner for transformations
│   │   └── Footer.js                 # Footer component
│   ├── pages/                        # Pages that layout the app's structure
│   │   ├── Home.js                   # Home page layout
│   │   ├── Editor.js                 # Editor page with the main image transformation
│   │   └── Gallery.js                # Gallery page for viewing previous artworks
│   ├── utils/                        # Helper functions (e.g., API calls)
│   │   └── api.js                    # API configuration
│   ├── App.js                        # Main app component
│   ├── index.js                      # Entry point of the React app
│   ├── App.css                       # Global styles
│   └── theme.js                      # Theme customization (colors, font styles)
└── package.json                      # Project dependencies


## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
