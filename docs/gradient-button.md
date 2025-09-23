# Gradient Button Component

The Gradient Button is a customizable button component with gradient backgrounds and hover effects.

## Installation

The component is automatically available as part of the project's UI library.

## Usage

```tsx
import { GradientButton } from '@/components/ui/gradient-button';

// Basic usage
<GradientButton>Click me</GradientButton>

// With variant
<GradientButton variant="destructive">Delete</GradientButton>

// With size
<GradientButton size="lg">Large Button</GradientButton>

// As a link (using asChild)
<GradientButton asChild>
  <Link to="/shop">Shop Now</Link>
</GradientButton>
```

## Props

The GradientButton component accepts all standard HTML button attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `"link"` | `"default"` | Button style variant |
| size | `"default"` \| `"sm"` \| `"lg"` \| `"icon"` | `"default"` | Button size |
| asChild | `boolean` | `false` | When true, renders as child element props |

## Variants

### Default
Primary gradient button with teal colors (from-teal-500 to teal-600)

```tsx
<GradientButton>Default</GradientButton>
```

### Destructive
Red gradient for destructive actions (from-destructive to destructive/90)

```tsx
<GradientButton variant="destructive">Delete Item</GradientButton>
```

### Outline
Transparent with border

```tsx
<GradientButton variant="outline">Outline</GradientButton>
```

### Secondary
Secondary color gradient (from-secondary to secondary/90)

```tsx
<GradientButton variant="secondary">Secondary</GradientButton>
```

### Ghost
Minimal styling with hover effects

```tsx
<GradientButton variant="ghost">Ghost</GradientButton>
```

### Link
Text-like button with underline

```tsx
<GradientButton variant="link">Link Button</GradientButton>
```

## Sizes

### default
Standard button size (h-10 px-4 py-2)

```tsx
<GradientButton size="default">Default Size</GradientButton>
```

### sm
Small button (h-9 rounded-md px-3)

```tsx
<GradientButton size="sm">Small Button</GradientButton>
```

### lg
Large button (h-11 rounded-md px-8)

```tsx
<GradientButton size="lg">Large Button</GradientButton>
```

### icon
Square button for icons (h-10 w-10)

```tsx
<GradientButton size="icon">
  <StarIcon />
</GradientButton>
```

## Hero Section Integration

For a complete hero section, use the HeroSection component which incorporates GradientButtons:

```tsx
import { HeroSection } from '@/components/HeroSection';

<HeroSection
  title="Welcome to Our Store"
  subtitle="Discover amazing products"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log('Primary clicked')}
  onSecondaryClick={() => console.log('Secondary clicked')}
/>
```

## Customization

To customize the gradient colors, modify the theme in `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        teal: {
          '500': '#234645',
          '600': '#1b3534'
        }
      }
    }
  }
}
```

The gradient transitions from `teal-500` to `teal-600` by default.

### Custom CSS Classes

You can also customize the appearance by passing additional CSS classes:

```tsx
<GradientButton className="rounded-full px-8 py-4">
  Rounded Button
</GradientButton>
```

## Implementation Details

The GradientButton component is built on top of the shadcn/ui Button component and uses:

1. **class-variance-authority (cva)**: For managing variants and compound variants
2. **Tailwind CSS**: For styling with utility classes
3. **Radix UI Slots**: For composing components with `asChild` prop
4. **Custom Animations**: Smooth hover effects with scaling and shadow transitions

## Accessibility

The component follows accessibility best practices:

- Proper focus management with visible focus rings
- Keyboard navigation support
- Sufficient color contrast
- Proper ARIA attributes
- Screen reader compatibility

## Best Practices

1. **Semantic Usage**: Use appropriate button types (submit, button, reset)
2. **Loading States**: Implement loading states for async operations
3. **Disabled States**: Properly handle disabled buttons
4. **Contrast**: Ensure sufficient contrast for text on gradient backgrounds
5. **Consistency**: Maintain consistent styling across the application

## Examples

### Form Submission
```tsx
<form onSubmit={handleSubmit}>
  <GradientButton type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </GradientButton>
</form>
```

### Icon Button
```tsx
<GradientButton size="icon">
  <HeartIcon />
</GradientButton>
```

### With Icon and Text
```tsx
<GradientButton>
  <ShoppingCartIcon />
  Add to Cart
</GradientButton>
```

### Full Width Button
```tsx
<GradientButton className="w-full">
  Continue to Checkout
</GradientButton>
```