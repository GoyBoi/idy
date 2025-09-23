# Mmwafrika Store Component Library

This document provides an overview of the component library used in the Mmwafrika Store project, including both the base shadcn/ui components and custom components we've created.

## Base Component Library

The project uses [shadcn/ui](https://ui.shadcn.com/) as its base component library, which provides accessible and customizable UI components built with [Radix UI](https://www.radix-ui.com/) and styled with [Tailwind CSS](https://tailwindcss.com/).

### Why shadcn/ui?

1. **Accessibility**: All components are built with accessibility in mind
2. **Customizable**: Easy to customize with Tailwind CSS classes
3. **No runtime dependencies**: Components are copied directly into the project
4. **TypeScript support**: Full TypeScript support out of the box
5. **Headless UI**: Built on top of Radix UI primitives for maximum flexibility

## Custom Components

In addition to the base shadcn/ui components, we've created several custom components to meet specific project needs.

### GradientButton

A custom button component with gradient backgrounds and enhanced hover effects.

- **Location**: `src/components/ui/gradient-button.tsx`
- **Documentation**: See [Gradient Button Documentation](./gradient-button.md)

### HeroSection

A reusable hero section component with animated elements and dual call-to-action buttons.

- **Location**: `src/components/HeroSection.tsx`

## Component Creation Guidelines

When creating new components for the Mmwafrika Store, follow these guidelines:

### 1. Use shadcn/ui as Base

Whenever possible, extend existing shadcn/ui components rather than creating from scratch:

```tsx
// Good: Extending shadcn/ui button
import { Button } from '@/components/ui/button'

// Bad: Creating a button from scratch
<button className="...">Click me</button>
```

### 2. Follow Naming Conventions

- Use PascalCase for component names
- Use descriptive names that clearly indicate the component's purpose
- Prefix with the component type when appropriate (e.g., `GradientButton`)

### 3. Use TypeScript

All components should be written in TypeScript with proper type definitions:

```tsx
interface MyComponentProps {
  title: string
  onClick: () => void
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  // Component implementation
}
```

### 4. Follow Existing Patterns

Look at existing components to understand the patterns used in this project:

- Component structure
- Styling approach with Tailwind CSS
- Use of cn() utility for conditional classes
- Proper forwarding of refs when needed

### 5. Include Documentation

Every custom component should have documentation that includes:

- Component description
- Usage examples
- Props documentation
- Customization options

## Styling Guidelines

### Color Palette

The project uses a specific color palette with teal as the primary accent color:

- Primary: `teal-500` (#234645) to `teal-600` (#1b3534)
- Secondary colors follow the Tailwind default palette
- All colors are defined in `src/css/input.css` as CSS variables

### Typography

- Primary font: Poppins (sans-serif)
- Secondary font: Merienda (cursive)
- Font weights: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)

### Spacing

Follow Tailwind's spacing scale:
- Use multiples of 4px (1rem = 16px)
- Consistent padding and margin patterns
- Responsive spacing with appropriate breakpoints

## Component Testing

All components should be tested using React Testing Library:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## Component Documentation

Each component should have accompanying documentation that explains:

1. Purpose and usage
2. Props and their types
3. Examples of how to use the component
4. Customization options
5. Best practices

Documentation should be stored in the `docs/` folder with a filename matching the component name.