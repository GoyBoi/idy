# Mmwafrika Store – Image Preparation & Compression Guide

## 1️⃣ Card Size Reference

| Card Type | Tailwind Aspect | Display Width | Display Height | Notes |
|-----------|----------------|---------------|----------------|-------|
| XS        | `aspect-square` | 96px (sm:128px) | 96px (sm:128px) | Thumbnails: small items (shoes, accessories) |
| SM        | `aspect-[4/5]` | 160px (sm:192px) | 200px (sm:240px) | Small clothing items, handbags |
| MD        | `aspect-[3/4]` | 224px (sm:256px) | 298px (sm:341px) | Shirts, pants, hoodies (upper/lower body) |
| LG        | `aspect-square` | 288px (sm:320px) | 288px (sm:320px) | Full-body dresses, jackets |
| XL Wide   | `aspect-video` | 512px (md:512px) | 288px (md:288px) | Featured or wide items (hero card size) |
| Hero      | `aspect-video` | Full width (~1920px) | 1080px | Full-width hero images, banners |

> 💡 Note: Use the **sm / md responsive widths** for mobile → desktop scaling.

---

## 2️⃣ Recommended File Formats

| Use Case                | Format        | Notes |
|-------------------------|---------------|-------|
| Product Cards           | JPEG / WebP   | WebP preferred for compression with minimal quality loss |
| Transparent / Overlays  | PNG           | For images with transparent backgrounds or overlays |
| Hero / Banner Images    | WebP / JPEG   | Optimize for fast loading but keep HD quality |
| Icons / Buttons         | SVG           | Perfect for scalable UI elements (wishlist heart, cart) |

---

## 3️⃣ Compression Guidelines

| Card Type | Target File Size | Recommended Tool | Notes |
|-----------|-----------------|-----------------|-------|
| XS / SM  | 20–40 KB        | TinyPNG, Squoosh | Thumbnails should be very light for fast grid rendering |
| MD / LG  | 50–100 KB       | TinyPNG, ImageOptim | Maintain clarity for clothing details |
| XL / Hero | 150–250 KB      | TinyPNG, Squoosh | Full-width images must load fast but still look crisp |
| All PNGs | N/A             | OptiPNG, TinyPNG | Reduce size without losing transparency |

> 🔹 **Tip:** Export WebP if possible — reduces file size up to **60%** compared to JPEG with nearly identical quality.

---

## 4️⃣ Cropping & Aspect Ratios

- **XS** → Square (1:1) → small items  
- **SM** → 4:5 → handbags, medium items  
- **MD** → 3:4 → upper/lower body clothing  
- **LG** → Square → full-body items  
- **XL / Hero** → 16:9 (aspect-video) → banners / featured products  
- **Hero** → Wide full-width, optimized for desktop & mobile responsive cropping

> ⚠️ Make sure **subject is centered** to avoid clipping in cards with fixed aspect ratios.

---

## 5️⃣ Image Naming Convention

Use **clear, structured names** for maintainability:
category-item-size-color.webp
e.g.,
handbag-bali-sm-black.webp
dress-maxi-lg-red.webp
shoes-sneaker-xs-white.webp
hero-fallcollection-xl.webp

---

## 6️⃣ Quality vs Performance

- Aim for **75–85% quality** in WebP/JPEG  
- Use **lazy loading** for cards below the fold:  
  ```html
  <img src="image.webp" loading="lazy" alt="Product Name" />

Consider responsive srcset: different sizes for mobile / tablet / desktop


## add light shadow overlays

.card-text-overlay {
  background: rgba(0, 0, 0, 0.3); /* semi-transparent */
  backdrop-filter: blur(6px);
  padding: 0.5rem;
  border-radius: 0.5rem;
}