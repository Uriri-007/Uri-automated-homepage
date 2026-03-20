<div align="center">
<img width="1200" height="475" alt="Uri Homepage Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Uri Homepage - Automated Developer Portfolio

An automated, high-performance developer portfolio featuring GitHub API integration, smooth animations, and a minimal dark aesthetic. Built with React, TypeScript, Tailwind CSS, and Vite for a seamless developer experience.

## ✨ Features

- **GitHub Integration**: Automatically fetch and display your GitHub repositories and profile data
- **Smooth Animations**: Beautiful motion effects powered by the Motion library
- **Dark Aesthetic**: Minimal, modern design optimized for developer portfolios
- **AI-Powered**: Integrated with Google Gemini API for enhanced capabilities
- **Type-Safe**: Built with TypeScript for robust development
- **Fast Build**: Powered by Vite for lightning-fast development and production builds
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env.local` file in the root directory
   - Set your `GEMINI_API_KEY` to your Gemini API key
   - Add any additional configuration variables as needed

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start the development server on port 3000
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run clean` - Remove the dist directory
- `npm run lint` - Type-check the project with TypeScript

## 🏗️ Project Structure

```
├── src/              # Source code (React components, styles, logic)
├── public/           # Static assets
├── index.html        # HTML entry point
├── metadata.json     # Project metadata
├── package.json      # Dependencies and scripts
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── .env.example      # Environment variables template
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 + Lucide React
- **AI Integration**: Google Generative AI SDK
- **Animations**: Motion library
- **Server**: Express.js
- **UI Utilities**: clsx, tailwind-merge

## 🔧 Environment Setup

Copy `.env.example` to `.env.local` and configure:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests to improve this portfolio.

---

**Made with ❤️ by Uri**