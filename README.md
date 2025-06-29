# FFIS Website

A modern React website built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to a GitHub repository
2. **Repository Settings**: Enable GitHub Pages in your repository settings

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site when you push to the `main` branch.

**To enable automatic deployment:**

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your code to the `main` branch
5. The workflow will automatically build and deploy your site

### Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://vijaydixitffis.github.io/ffis-website`

### Repository Settings

**Important**: Make sure to configure GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, choose either:
   - **GitHub Actions** (for automatic deployment)
   - **Deploy from a branch** → Select `gh-pages` branch → `/ (root)` folder
4. Click **Save**

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📁 Project Structure

```
ffis-website/
├── public/              # Static assets
├── src/                 # Source code
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .github/workflows/   # GitHub Actions
├── package.json         # Dependencies and scripts
└── vite.config.ts      # Vite configuration
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file is configured with:
- React plugin
- Base path for GitHub Pages (`/ffis-website/`)
- Optimized dependencies

### Package.json Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Live Site

Once deployed, your site will be available at:
`https://vijaydixitffis.github.io/ffis-website`

## 📝 Notes

- The base path is set to `/ffis-website/` for GitHub Pages deployment
- Make sure to update the `homepage` field in `package.json` if you change the repository name
- The GitHub Actions workflow automatically builds and deploys on pushes to the main branch
