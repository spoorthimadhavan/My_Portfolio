# Deployment Guide

This guide covers deployment options for the portfolio website.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest & Best for React)

**Steps:**
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite/React
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

**Benefits:**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Auto-deploys on git push
- ✅ Fast global CDN
- ✅ Perfect for React/Vite

---

### Option 2: Netlify

**Steps:**
1. Push to GitHub (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

**Benefits:**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Form handling (for contact form)
- ✅ Custom domain support

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable in GitHub:
   - Go to repository Settings → Pages
   - Select source: "gh-pages branch"
   - Your site: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## 📝 Before Deploying

### 1. Update Social Links
Edit these files and add your real profiles:
- `src/components/Hero.jsx` (line ~140-160)
- `src/components/Contact.jsx` (line ~60-70)

### 2. Update Project Links
Edit `src/components/Projects.jsx`:
- Replace GitHub URLs with your actual repositories
- Replace demo URLs with your deployed projects
- Or set to `#` if projects aren't ready yet

### 3. Build for Production
```bash
npm run build
```
This creates an optimized `dist` folder ready for deployment.

---

## 🎯 Recommended: Vercel Deployment

**Why Vercel?**
- Best performance for React apps
- Zero configuration needed
- Free SSL certificate
- Automatic deployments
- Great developer experience

**Quick Start:**
1. Push code to GitHub
2. Connect Vercel to GitHub
3. Click Deploy
4. Done! 🎉

Your portfolio will be live at: `https://your-portfolio.vercel.app`

---

## 🔗 Custom Domain (Optional)

After deployment, you can add a custom domain:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management

---

## 📧 Contact Form Integration

To make your contact form work, integrate with:

1. **Formspree** (Easiest):
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update `Contact.jsx` form action

2. **EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Add service configuration
   - Update form handler

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Social links updated
- [ ] Project links updated (or set to #)
- [ ] Contact form integrated (optional)
- [ ] Site deployed and tested
- [ ] Custom domain added (optional)
- [ ] Analytics added (optional - Google Analytics, Plausible)

---

**Need Help?** Check the main README.md for more details!
