# 🛍️ Interactive Product Filter Display

A lightweight **React + Vite + Tailwind CSS** project that displays a responsive grid of products with dynamic category and price-range filters.  
Deployed live via **GitHub Pages**:  
👉 [dkranzmat.github.io/Interactive-Product-Filter-Display](https://dkranzmat.github.io/Interactive-Product-Filter-Display)

---

## ⚙️ Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start local dev server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview local build**
   ```bash
   npm run preview
   ```

---

## ✨ Features

- 🔍 **Category filter** — Filter by groups like *All*, *Electronics*, *Apparel*, etc.  
- 💰 **Price range filter** — Adjustable min/max product pricing.  
- 💡 **Local SVG images** — Fast, offline-friendly, and optimized for Pages deployment.  
- 🎨 **Tailwind CSS** — Responsive, utility-first design with minimal CSS overhead.  
- ⚛️ **Modular React components** — Clean structure for easy reuse and extension.  
- ⚡ **Vite bundler** — Instant hot reloads and optimized builds for GitHub Pages.  

---

## 📁 Project Structure

```
Interactive-Product-Filter-Display/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── images/
│       ├── 1.svg
│       ├── 2.svg
│       └── ...
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── products.json
    ├── utils/
    │   └── asset.js
    └── components/
        ├── FilterBar.jsx
        └── ProductList.jsx
```

✅ **Note:** Keep the `public/` folder outside of `src/`.  
Vite automatically serves assets from `/public` at your app’s root, so `/images/1.svg` resolves correctly during build and deployment.

---

## 🧠 Tech Stack

| Tool / Library | Purpose |
|-----------------|----------|
| **React 18+** | Component-based UI logic |
| **Vite** | Fast build tool and local dev server |
| **Tailwind CSS** | Responsive utility-first styling |
| **GitHub Pages** | Static site hosting |
| **Node.js + npm** | Dependency management and scripts |

---

## 💬 Notes

- Each product references a **local SVG image** stored in `/public/images/` for reliability and quick load times.  
- Deployment configured via GitHub Actions workflow (`.github/workflows/pages.yml`).  
- Compatible with modern browsers and mobile viewports.  
- Easily extendable for API integration or advanced filtering logic.

---

## 🧩 Demo

Live preview → [**Interactive Product Filter Display**](https://dkranzmat.github.io/Interactive-Product-Filter-Display)  
Responsive, performant, and visually minimal — built for clean UX and code clarity.

---

**Author:** Dave Kranz  
💻 Front-End Developer | React • Tailwind • Vite  
[GitHub](https://github.com/DKranzMAT)
