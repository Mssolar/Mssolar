# MS Solar Powercorp - Website & Gemini Showcase

This repository contains the source code for the official MS Solar Powercorp website, a modern, build-less web application built with React, TypeScript, and Tailwind CSS. It features a full company website and an integrated showcase of the Google Gemini API's capabilities.

## ✨ Key Features

*   **No Build Step Needed:** This project runs directly in the browser using modern web standards like **Import Maps** and **ES Modules**. You do not need to run `npm install` or a `build` command. The source code is the deployable website.
*   **Static Host Ready:** The use of `HashRouter` for navigation and CDN-hosted dependencies makes it perfectly suited for any static hosting platform (e.g., GitHub Pages, Vercel, Netlify).
*   **Gemini API Showcase:** An interactive section demonstrating various Gemini API features, including text and image generation, streaming chat, JSON mode, and search grounding.
*   **Responsive Design:** Fully responsive layouts for a seamless experience on desktops, tablets, and mobile devices.

## 🚀 Deployment

This application is designed for easy deployment to any static web hosting service.

### Deploying to GitHub Pages

1.  **Push Code to GitHub:** Ensure all your project files are in a GitHub repository.
2.  **Enable GitHub Pages:**
    *   In your repository, go to `Settings` > `Pages`.
    *   Under "Build and deployment", for the "Source", select **Deploy from a branch**.
    *   Choose your branch (e.g., `main`), select the folder as `/ (root)`, and click **Save**.
    *   GitHub will deploy your site. The URL will be available on the same page after a few minutes.

## 🔧 Local Development

To run this website on your local machine for development, you can use any simple local web server.

If you have **Node.js** installed, use the `serve` package:
```bash
# From your project's root directory:
npx serve
```

If you have **Python** installed:
```bash
# From your project's root directory:
python -m http.server
```

Then, open the URL provided (e.g., `http://localhost:3000` or `http://localhost:8000`) in your browser.

## 🔑 Gemini API Key

The Gemini API features (Text Generation, Chat, etc.) require a Google Gemini API key to function. This project includes a fallback API key to allow the showcase to function out-of-the-box when deployed on simple static hosting environments.

### Using Your Own API Key

The included API key is for demonstration purposes only and may be subject to rate limits or deactivation. For reliable use, especially in a production environment, you should use your own API key.

The application is configured to prioritize an API key from a `process.env.API_KEY` environment variable. This is the most secure method.

1.  **Recommended (Production):** Deploy to a host like Vercel or Netlify and set the `API_KEY` in their environment variable settings. The application will automatically use it.
2.  **Development/Simple Deploy:** If you cannot use environment variables, you can replace the placeholder key in `services/geminiService.ts`. **Warning:** Be aware of the security risks of exposing an API key in client-side code. Do not commit your personal API key to a public repository.
