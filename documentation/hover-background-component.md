# Themed Hover Background Component

## Overview

The ThemedHoverBackground component is a dynamic background that automatically adapts to your website's light/dark theme and uses your brand colors. It features interactive elements with parallax effects that respond to mouse movement.

## Implementation Details

### Component Structure

The component consists of:
1. **ThemedHoverBackground.tsx** - Main component that adapts to light/dark themes
2. **hover-background/demo.tsx** - Demo page showing usage

### Technical Features

1. **Theme Adaptation**: Automatically switches between light and dark theme colors
2. **Brand Color Integration**: Uses your website's teal accent colors
3. **Parallax Effects**: Interactive elements that respond to mouse movement
4. **Smooth Animations**: Subtle breathing and floating animations
5. **Responsive Design**: Works on all screen sizes

### Color Scheme

#### Light Theme
- Background: `bg-gradient-to-br from-white via-gray-50 to-gray-100`
- Objects: `bg-teal-500/20`, `bg-teal-600/20`, `bg-gray-400/20`, `bg-gray-500/20`
- Glow: `shadow-teal-400/50`

#### Dark Theme
- Background: `bg-gradient-to-br from-gray-900 via-gray-950 to-black`
- Objects: `bg-teal-500/30`, `bg-teal-400/30`, `bg-gray-700/30`, `bg-gray-600/30`
- Glow: `shadow-teal-400/70`

## Usage

```tsx
import { ThemedHoverBackground } from '@/components/ThemedHoverBackground';

export default function MyComponent() {
  return (
    <ThemedHoverBackground className="w-full h-96">
      <div className="flex items-center justify-center h-full">
        {/* Your content here */}
      </div>
    </ThemedHoverBackground>
  );
}
```

## Files

- `src/components/ThemedHoverBackground.tsx` - Main themed background component
- `src/components/hover-background/demo.tsx` - Demo implementation
- `src/components/ui/hover-background.tsx` - Base hover background component
- `src/components/hover-background/dark.tsx` - Dark theme example

## Dependencies

The component uses:
- `motion/react` for animations
- `next-themes` for theme management
- Tailwind CSS for styling

## Customization

You can customize the component by:
1. Adjusting the color schemes in `ThemedHoverBackground.tsx`
2. Changing the number of objects with the `objectCount` prop
3. Modifying the className for different sizing
4. Adding additional content within the component

## Testing

The component has been tested and builds successfully with your existing project setup.