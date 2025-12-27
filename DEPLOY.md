# How to Deploy Your Website

## Option 1: Vercel (Easiest - Recommended)

### Step 1: Push to GitHub
1. Go to https://github.com and create a new repository
2. In your terminal, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up/login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes
8. You'll get a live URL like: `https://your-project.vercel.app`

### Step 3: Share the Link
- Copy the URL Vercel gives you
- Share it with anyone!

---

## Option 2: Netlify

1. Go to https://netlify.com
2. Sign up/login
3. Drag and drop your project folder OR connect to GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

---

## Option 3: Manual Build & Share

If you want to test the production build locally first:

```bash
npm run build
npm start
```

Then it will run on http://localhost:3000 (production mode)

---

## Quick Deploy Commands

### Install Vercel CLI (optional):
```bash
npm install -g vercel
```

### Deploy via CLI:
```bash
vercel
```

Follow the prompts and you'll get a live URL!

