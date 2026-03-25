# Peace Khutso Molimo · Research Portfolio

University of the Western Cape · BSc Computer Science Honours 2026
Smart Queue Management System Research

## Setup in IntelliJ IDEA

1. **Open project**: File → Open → select `portfolio-v2` folder
2. **Run locally**: Right-click `index.html` → Open In → Browser (uses IntelliJ's built-in server so `data.json` loads correctly)

## Add your assets

### Profile photo
- Place your photo at `assets/peace.jpg`
- Landscape or portrait works — the frame crops to 3:4 (portrait) with object-fit cover
- Aim for a clean, professional shot (website-style, not profile picture)

### UWC Logo
- Download the official UWC logo from the UWC website
- Save as `assets/uwc-logo.png` (transparent background preferred)
- It will appear in the navbar and on the hero photo badge

## Edit your content

Everything is in `data.json` — open it and update:
- `profile.name`, `title`, `tagline`, `bio_intro`, `bio_detail`
- `profile.interests` and `profile.skills` arrays
- `research.title`, `subtitle`, `abstract`, `keywords`
- Each term's `documents` array — set `"pdf"` to your actual PDF path, e.g. `"assets/docs/lit-review.pdf"`

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Research portfolio"
git branch -M main
git remote add origin https://github.com/peacekhutso-dev/research-portfolio.git
git push -u origin main
```
Then: GitHub repo → Settings → Pages → Source: Deploy from branch → main / (root)

Live at: `https://peacekhutso-dev.github.io/research-portfolio/`