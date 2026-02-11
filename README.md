# CODE AI 2026 - International Conference on Data Science & AI

This is the static website for the 3rd International Conference on Data Science & Exploration in Artificial Intelligence (CODE AI 2026).

## 🚀 Deployment Guide

The production-ready files are located in the `dist/` directory. You can deploy this folder to any static hosting provider.

### Structure
- `dist/index.html` - Home Page
- `dist/css/` - Minified Styles
- `dist/js/` - Minified Scripts
- `dist/assets/` - Images and Documents

### Local Testing
To test the production build locally:

1. Navigate to the `dist` folder:
   ```sh
   cd dist
   ```

2. Start a local server:
   ```sh
   python3 -m http.server 8000
   ```
   
3. Open `http://localhost:8000` in your browser.

## 🛠 Features
- **Performance:** Minified HTML/CSS/JS, Lazy Loading images.
- **SEO:** Meta tags, Open Graph, Twitter Cards.
- **Accessibility:** Semantic HTML, Alt text, ARIA labels.
- **Security:** Content Security Policy (CSP).

## 📝 Build Process
To regenerate the `dist/` folder from source:
```sh
python3 build.py
```
