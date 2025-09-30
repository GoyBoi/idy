# 2-Component-Library

## Introduction
This document lists reusable UI components for Mmwafrika Store. All components follow mobile-first design, dark/light mode tokens, and safe modification rules.

## Guidelines
- Use Shadcn/ui + Radix primitives exclusively.
- Wrap components for safe custom behavior without modifying critical flows.
- Follow Tailwind-only styling; extend theme in `tailwind.config.ts` only.

## Components with Examples

### Button
```tsx
<Button variant="primary" className="hover:bg-teal-700 dark:hover:bg-teal-400">
  Add to Cart
</Button>
```

### Card (Product)
```tsx
<Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
  <CardImage src="/images/product.png" alt="Product" />
  <CardTitle>Product Name</CardTitle>
  <CardPrice>$29.99</CardPrice>
</Card>
```

### Navbar & Hamburger Overlay (Safe Modification Zone)
```tsx
<Navbar>
  <HamburgerMenu overlayId="main-overlay" /> {/* Do not modify unless explicitly instructed */}
</Navbar>
```

## Cross References
- Page Blueprints: `3-Page-Blueprints.md`
- Responsive Rules: `6-Responsive-Rules.md`
- UI Animation: `7-UI-Animation.md`
