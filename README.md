# Aditi Yuvraj Kadam — E-Commerce & Web Developer Portfolio 🛒

> **Live Portfolio & Resume Receipt Website**  
> Modern dark-ink theme & itemized receipt e-commerce aesthetic for **Aditi Yuvraj Kadam**, WordPress & Shopify Developer based in Pune, India.

---

## 🌟 Highlights & Features

- 🧾 **Itemized Receipt Design**: Unique e-commerce receipt visual identity featuring serrated paper edges, barcode graphics, and itemized service billing structure.
- 🖼️ **Interactive Project Lightbox**: Clickable modal previews displaying project screenshots, key technical achievements, and live site links.
- 📋 **Instant Copy & Toast Notifications**: One-click email & phone clipboard copying with responsive toast feedback.
- 🖨️ **Print-Ready Resume Receipt**: Custom print stylesheet formats the page into a clean PDF / physical receipt resume with one click.
- 🚀 **SEO & Social Sharing**: Pre-configured Open Graph tags, Twitter cards, meta descriptions, and custom SVG favicon.
- ⚡ **Zero Dependencies**: Pure HTML5, Vanilla CSS3, and modern JavaScript (ES6+). Fast load time and 100% PageSpeed score.

---

## 📁 Repository Structure

```text
d:\Aditi\Portfolio\
├── index.html                  # Main portfolio HTML structure & modal markup
├── css/
│   └── style.css               # Design system, receipt styles, animations, print media rules
├── js/
│   └── script.js               # Interactive modals, copy-to-clipboard, date formatting, print handler
├── assets/
│   └── images/                 # Optimized project preview screenshots
│       ├── gift-mart.jpg
│       ├── enterprise-solutions.jpg
│       ├── lumina-school.jpg
│       ├── dizester-herbal.jpg
│       └── drip-kingz.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── .gitignore                  # Git ignore rule file
└── README.md                   # Setup & deployment documentation
```

---

## 🚀 How to Push to Git & Deploy Live

Follow these simple steps to push your portfolio to GitHub and publish it live for free.

### Step 1: Install Git (If not already installed)
Download and install Git from [git-scm.com](https://git-scm.com/downloads).

### Step 2: Initialize Git & Commit
Open Terminal or PowerShell inside `d:\Aditi\Portfolio` and run:

```bash
# 1. Initialize Git repository
git init

# 2. Add all portfolio files
git add .

# 3. Commit your files
git commit -m "Initial commit: Aditi Yuvraj Kadam Portfolio"
```

### Step 3: Create GitHub Repository & Push
1. Go to [GitHub.com](https://github.com/new) and create a new repository named `portfolio` (or `aditi-kadam.github.io`).
2. Do **not** check "Initialize with a README" (since we already have one).
3. Copy the commands shown on GitHub and run them in your terminal:

```bash
# Rename branch to main
git branch -M main

# Link your local repository to your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git push -u origin main
```

---

## 🌐 Publishing Live (Choose Any Free Option)

### Option A: GitHub Pages (Recommended — Automated)
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site at `https://YOUR_USERNAME.github.io/portfolio/` whenever you push!

### Option B: Vercel / Netlify (Instant 1-Click Deploy)
1. Sign up at [Vercel.com](https://vercel.com) or [Netlify.com](https://netlify.com).
2. Click **Add New Project** → **Import from GitHub**.
3. Select your `portfolio` repository and click **Deploy**.
4. Your site will be live on a custom URL (e.g., `https://aditikadam.vercel.app`) with HTTPS enabled.

---

## 🛠️ Customization

- **Updating Projects**: Edit `projectsData` in `js/script.js` to change titles, descriptions, tech tags, or live links.
- **Updating Contact Info**: Modify email, phone number, and location in `index.html`.

---

© 2026 Aditi Yuvraj Kadam. Built with HTML, CSS & JS.
