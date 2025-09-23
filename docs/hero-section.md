# HeroSection Component

The HeroSection component is a reusable component for creating visually appealing hero sections with animated elements and gradient buttons.

## Usage

```tsx
import { HeroSection } from '@/components/HeroSection';

// Basic usage
<HeroSection
  title="Welcome to Our Store"
  subtitle="Discover amazing products"
  primaryButtonText="Get Started"
  onPrimaryClick={() => console.log('Primary clicked')}
/>

// With secondary button
<HeroSection
  title="Welcome to Our Store"
  subtitle="Discover amazing products"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log('Primary clicked')}
  onSecondaryClick={() => console.log('Secondary clicked')}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | The main heading text |
| subtitle | string | Yes | The subtitle/description text |
| primaryButtonText | string | Yes | Text for the primary button |
| secondaryButtonText | string | No | Text for the secondary button |
| onPrimaryClick | () => void | Yes | Callback for primary button click |
| onSecondaryClick | () => void | No | Callback for secondary button click |
| className | string | No | Additional CSS classes to apply |

## Features

1. **Animated Background**: Gradient background with decorative SVG pattern
2. **Floating Elements**: Animated floating circles for visual interest
3. **Typography**: Enhanced text styling with shadows and strokes
4. **Responsive Design**: Adapts to different screen sizes
5. **Dual CTA Buttons**: Primary and secondary call-to-action buttons
6. **Gradient Buttons**: Uses the custom GradientButton component

## Customization

To customize the appearance, you can pass additional CSS classes via the `className` prop:

```tsx
<HeroSection
  title="Custom Styled Hero"
  subtitle="This hero has custom styling"
  primaryButtonText="Get Started"
  onPrimaryClick={() => {}}
  className="bg-gradient-to-r from-purple-500 to-indigo-600"
/>
```

## Implementation Details

The HeroSection component uses:

1. **GradientButton**: Custom button component with gradient backgrounds
2. **CSS Animations**: Floating elements with pulse animations
3. **Tailwind CSS**: Utility classes for styling
4. **React Router**: For navigation functionality

## Best Practices

1. **Keep Text Concise**: Hero sections should have clear, compelling messaging
2. **Contrast**: Ensure text has sufficient contrast against the background
3. **CTA Clarity**: Primary button should represent the main action
4. **Performance**: Avoid heavy images in the background
5. **Responsiveness**: Test on different screen sizes

## Accessibility

The component follows accessibility best practices:

- Proper semantic HTML structure
- Sufficient color contrast
- Focus management for keyboard navigation
- Screen reader-friendly text