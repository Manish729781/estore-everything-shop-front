
# Deployment Guide

## Netlify Deployment

1. **Build your project locally first to check for errors:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Environment Variables (if needed):**
   - Go to Site settings > Environment variables
   - Add any required environment variables

4. **Deploy:**
   - Netlify will automatically deploy when you push to your main branch

## Common Issues & Solutions

- **Build fails:** Check that all dependencies are properly installed
- **404 errors:** The `netlify.toml` file handles routing for SPA
- **Slow builds:** The build optimization in `vite.config.ts` helps with performance

## Manual Deployment

If automatic deployment fails, you can deploy manually:
1. Run `npm run build` locally
2. Drag and drop the `dist` folder to Netlify's deploy area
