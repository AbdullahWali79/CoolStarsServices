# GitHub Pages Deployment Guide

## Steps to Deploy Your Website

### 1. Install Dependencies
First, install the gh-pages package:
```bash
cd my-app
npm install
```

### 2. Configure GitHub Repository
1. Go to your GitHub repository: `https://github.com/[your-username]/coolstarservices`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Push Your Code
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 4. Automatic Deployment
- The GitHub Actions workflow will automatically build and deploy your site
- Go to **Actions** tab in your repository to monitor the deployment
- Once completed, your site will be available at: `https://[your-username].github.io/coolstarservices/`

### 5. Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
cd my-app
npm run deploy
```

## Important Notes
- Your site will be available at: `https://[your-username].github.io/coolstarservices/`
- The base path is configured as `/coolstarservices/` in vite.config.js
- Make sure your repository name matches the base path configuration
- The deployment happens automatically on every push to the main branch

## Troubleshooting
- If the site doesn't load, check the Actions tab for any errors
- Ensure all file paths in your code use relative paths
- Make sure your repository is public (required for free GitHub Pages)
