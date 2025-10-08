# Product Filter Component

A small React + Tailwind CSS project that displays a list of products with category and price range filters.

## 🚀 Setup
1. Install dependencies
   ```bash
   npm install
   ```

2. Start development server
   ```bash
   npm run dev
   ```

3. Build for production
   ```bash
   npm run build
   ```

## 🧩 Features
- Category filter (All, Electronics, Apparel, etc.)
- Price range filter (min/max)
- Tailwind CSS styling only
- Local SVG placeholder images for offline reliability

## 📂 File Structure

```
product-filter/
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
    └── components/
        ├── FilterBar.jsx
        └── ProductList.jsx
```

✅ **Note:** The `public/` folder should stay **outside** of `src/`.  
Vite automatically serves files from `public/` at the root of your app (e.g., `/images/1.svg` → `public/images/1.svg`).

## 🧠 Notes
- Built with Vite + React.
- Uses clean, modular components.
- Tailwind handles all styling via utility classes.
- Each product’s image is an SVG stored locally in `public/images/` for reliable loading.
