# DigitalHero Component Documentation

The DigitalHero component is a custom hero section designed specifically for the Mmwafrika Store to showcase traditional African clothing and handcrafted knitwear.

## Purpose

This component was created to provide a culturally relevant hero section that:

1. Represents the rich heritage of African textiles and craftsmanship
2. Showcases products in an aesthetically pleasing way
3. Provides clear calls-to-action for users
4. Maintains the project's teal color scheme with complementary accent colors

## Features

### Visual Design
- Dynamic pattern animations representing traditional African motifs
- Rich color palette inspired by authentic African textiles (teal, amber, purple, emerald)
- Animated floating elements for visual interest
- Gradient backgrounds with subtle texture overlays
- Responsive design that works on all device sizes

### Product Showcase
- Abstract representation of traditional clothing items
- Floating product cards with hover effects
- Visual hierarchy that draws attention to key products
- Smooth animations and transitions for enhanced user experience

### Interactivity
- Animated pattern transitions every 3 seconds
- Hover effects on product cards and buttons
- Clear call-to-action buttons using the GradientButton component
- Smooth scrolling behavior

## Usage

```tsx
import DigitalHero from '@/components/DigitalHero';

// Basic usage
<DigitalHero />

// With custom className
<DigitalHero className="my-custom-class" />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| className | string | No | '' | Additional CSS classes to apply to the component |

## Implementation Details

The DigitalHero component uses:

1. **React Hooks**: 
   - `useState` for managing the current pattern state
   - `useEffect` for handling pattern transitions
   - `useNavigate` for routing navigation

2. **Custom Components**:
   - `GradientButton` for call-to-action buttons
   - CSS animations for pattern transitions and floating elements

3. **Design Elements**:
   - SVG patterns representing traditional African motifs
   - Gradient backgrounds with the project's teal color scheme
   - Abstract product representations using CSS gradients
   - Floating decorative elements with blur effects

4. **Responsive Design**:
   - Grid layout that adapts to different screen sizes
   - Flexible text sizing with responsive breakpoints
   - Mobile-first approach with progressive enhancement

## Customization

To customize the appearance, you can pass additional CSS classes via the `className` prop:

```tsx
<DigitalHero className="bg-gradient-to-r from-purple-900 to-indigo-900" />
```

## Animation Patterns

The component cycles through 4 different SVG patterns representing traditional African designs:
1. Square pattern
2. Diamond pattern
3. Circular pattern
4. Hexagonal pattern

Each pattern is displayed for 3 seconds before transitioning to the next one.

## Accessibility

The component follows accessibility best practices:
- Proper semantic HTML structure
- Sufficient color contrast
- Focus management for keyboard navigation
- Screen reader-friendly text
- Respect for prefers-reduced-motion media query

## Performance

The component is optimized for performance:
- Lightweight SVG patterns
- Efficient React state management
- CSS animations instead of JavaScript for smoother performance
- Lazy loading of decorative elements

## Integration with Project

The DigitalHero component integrates seamlessly with the existing Mmwafrika Store project:
- Uses the existing `GradientButton` component for CTAs
- Follows the project's color scheme and typography
- Implements responsive design using Tailwind CSS
- Uses React Router for navigation