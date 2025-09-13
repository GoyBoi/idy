# Mmwafrika Store Typography Guidelines

## 1️⃣ Fonts

| Purpose                 | Font Family           | Weight(s)        | Notes |
|-------------------------|---------------------|-----------------|------|
| Headings / Titles        | Poppins, sans-serif  | 400, 600, 700   | Clean, modern, geometric. Use for H1–H3, hero titles, and major headings. |
| Body Text / Paragraphs   | Merienda, cursive    | 400, 700        | Friendly, approachable. Use for product descriptions, labels, reviews. |
| Buttons / Labels         | Merienda, cursive    | 400, 700        | Maintains brand personality, paired with hover effects. |

---

## 2️⃣ Headings

| Heading | Font | Weight | Tailwind Example | Notes |
|---------|------|--------|-----------------|------|
| H1      | Poppins | 700 | `text-5xl font-bold font-sans` | Hero titles, main section headings |
| H2      | Poppins | 600 | `text-4xl font-semibold font-sans` | Sub-sections, featured products |
| H3      | Poppins | 500 | `text-3xl font-medium font-sans` | Cards, secondary titles |
| H4/H5   | Poppins | 400 | `text-xl font-normal font-sans` | Minor headings, UI labels |

---

## 3️⃣ Body Text

| Type               | Font      | Size / Tailwind Class           | Notes |
|-------------------|-----------|-------------------------------|------|
| Paragraphs         | Merienda  | `text-base font-merienda`     | Product descriptions, reviews |
| Small text / Labels | Merienda  | `text-sm font-merienda`       | Buttons, captions, metadata |
| Highlight / Emphasis | Merienda| `text-base font-bold font-merienda` | For product prices, key features |

---

## 4️⃣ Buttons

| Button Type        | Font        | Tailwind Classes Example | Notes |
|-------------------|------------|------------------------|------|
| Add to Cart        | Merienda   | `px-6 py-2 rounded-lg bg-[#234645] text-white font-merienda hover:scale-105 hover:shadow-[0_0_15px_#234645]` | Glassmorphism + hover glow |
| Wishlist Icon      | Merienda   | `p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645]` | Floating icon feel |
| Checkout Button    | Merienda   | `px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#234645] to-[#1b3534] hover:scale-105 hover:shadow-[0_0_20px_#234645]` | CTA emphasis |
| Guest Checkout     | Merienda   | `px-6 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:scale-105 hover:bg-black/60 hover:shadow-[0_0_15px_#234645]` | Secondary CTA |

---

## 5️⃣ Card Text (Glassmorphism)

- Use **Merienda** for product names:  
  ```html
  <p class="font-merienda text-lg text-white">Handcrafted Bag — Limited Edition</p>

## Tailwind Application of styles

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        merienda: ['Merienda', 'cursive'],
      },
    },
  },
}