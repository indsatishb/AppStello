# AppStello Labs – Website

**Company:** AppStello Labs  
**Website:** appstello.com  
**Industry:** Web & App Development  
**Version:** 1.0 | 2026

---

## 📁 Project Structure

```
appstello/
├── index.html          → Home Page
├── about.html          → About Page
├── services.html       → Services Page
├── portfolio.html      → Portfolio Page
├── contact.html        → Contact Page
├── README.md
└── assets/
    ├── css/
    │   └── style.css   → Main Stylesheet (all styles)
    ├── js/
    │   └── script.js   → Main JavaScript / jQuery logic
    ├── images/         → (Add your images here)
    └── vendor/
        └── jquery/
            └── jquery.min.js  → jQuery 3.7.1 (add manually, see below)
```

---

## 🚀 Getting Started

### 1. Add jQuery

The jQuery file needs to be added manually (or fetched via CDN).

**Option A – Download jQuery:**
1. Go to https://code.jquery.com/jquery-3.7.1.min.js
2. Save as `assets/vendor/jquery/jquery.min.js`

**Option B – CDN (already set up as fallback):**  
If the local jQuery file is missing, the site automatically falls back to the jQuery CDN. No action needed for hosting.

### 2. Open in Browser

Simply open `index.html` in any modern browser. No build tools or server required.

### 3. Hosting

Upload all files maintaining the directory structure to any static host:
- **Shared Hosting** (cPanel): Upload via File Manager or FTP
- **Vercel / Netlify**: Drag-and-drop the folder
- **GitHub Pages**: Push to a repository and enable Pages

---

## ✅ Features

| Feature | Details |
|---------|---------|
| Pages | 5 (Home, About, Services, Portfolio, Contact) |
| Framework | Pure HTML + CSS + jQuery (no build tools) |
| Responsive | Mobile, Tablet, Desktop |
| Navbar | Sticky with scroll effect + hamburger menu |
| Hero | Animated mockup + floating badges |
| Services | Cards with hover effects |
| Counters | Animated on scroll |
| Testimonials | jQuery auto-sliding carousel |
| Portfolio | jQuery filter (All/Web/App/Design) |
| Contact Form | jQuery validation with success message |
| WhatsApp | Pre-filled message button |
| Loader | Animated page loader |
| Scroll Top | Floating back-to-top button |
| SEO | Meta tags, semantic HTML structure |
| Fonts | Google Fonts – Poppins |
| Icons | Font Awesome 6.5 |

---

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css` (top of file):
```css
:root {
  --primary: #1a6dff;      /* Main blue */
  --accent: #00d4ff;       /* Cyan accent */
  --secondary: #0066ff;    /* Dark navy */
}
```

### Company Details
Search and replace throughout HTML files:
- `AppStello Labs` → Your company name
- `hello@appstello.com` → Your email
- `+91 91998 99971` → Your phone
- `Barkurba , Dullipatti , Jaynagar` → Your address
- `91XXXXXXXXXX` in WhatsApp links → Your WhatsApp number (digits only)

### Google Maps
In `contact.html`, find the map-container div and replace with:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" height="400" style="border:0;"
  allowfullscreen loading="lazy">
</iframe>
```

### WhatsApp Number
Find all instances of `91XXXXXXXXXX` and replace with your country code + number (no spaces or + sign):
```
https://wa.me/919876543210?text=...
```

---

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📄 License

© 2026 AppStello Labs. All Rights Reserved.  
This code is proprietary. Not for redistribution without permission.

---

## 💬 Support

**Email:** hello@appstello.com  
**WhatsApp:** +91 9199899971 
**Website:** www.appstello.com
