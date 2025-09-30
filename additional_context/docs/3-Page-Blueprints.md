# 3-Page-Blueprints

## Introduction
Page layouts and wireframes for mobile-first Mmwafrika Store frontend. Use as a blueprint when creating/updating pages.

## Homepage (Mobile-First)
- Hero section: full-width image, CTA button
- Featured products grid: 2 columns mobile, 3 tablet, 4 desktop
- Navbar with hamburger menu overlay (critical)

### Example JSX
```tsx
<PageLayout>
  <Hero image="/hero.png" ctaText="Shop Now" />
  <ProductGrid columns={{mobile:2, tablet:3, desktop:4}} />
</PageLayout>
```

## Product Page
- Product gallery
- Product details & Add to Cart
- Wishlist button with offline persistence

### Example JSX
```tsx
<ProductPage product={product}>
  <Gallery images={product.images} />
  <ProductDetails {...product} />
</ProductPage>
```

## Cross References
- Component Library: `2-Component-Library.md`
- Interaction State: `5-Interaction-State.md`
- Responsive Rules: `6-Responsive-Rules.md`
