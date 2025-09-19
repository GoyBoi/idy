# Mmwafrika Store - Design System and UI Components

## Design Philosophy

The Mmwafrika Store follows a minimalist aesthetic with a focus on showcasing African-inspired fashion through a clean, modern interface. The design emphasizes:

1. **Minimalist Color Palette**: Black, white, and teal create a sophisticated foundation
2. **Glassmorphic UI Elements**: Frosted glass effects add depth and visual interest
3. **Typography Hierarchy**: Clear distinction between headings and body text
4. **Responsive Design**: Seamless experience across all device sizes
5. **Consistent Spacing**: Uniform padding and margins throughout the interface

## Color System

### Primary Colors
- **Black**: `#000000` - Primary background and text
- **White**: `#FFFFFF` - Secondary text and contrast elements
- **Teal**: `#234645` - Accent color for buttons, links, and highlights

### Secondary Colors
- **Teal Dark**: `#1b3534` - Hover states and darker accents
- **Teal Light**: `#2a5453` - Lighter accents and gradients

### Glassmorphic Colors
- **Light Glass**: `bg-white/10` with `backdrop-blur-md`
- **Dark Glass**: `bg-black/30` with `backdrop-blur-md`
- **Border**: `border-white/20`

### Text Colors
- **Primary Text**: `text-white`
- **Secondary Text**: `text-white/80`
- **Tertiary Text**: `text-white/60`

## Typography

### Font Families
- **Headings**: Poppins (clean, modern sans-serif)
- **Body Text**: Merienda (friendly, readable cursive)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700

### Font Sizes
- **Display**: 4xl (36px) - Hero section headings
- **Heading 1**: 3xl (30px) - Page titles
- **Heading 2**: 2xl (24px) - Section headings
- **Heading 3**: xl (20px) - Subheadings
- **Body Large**: lg (18px) - Lead paragraphs
- **Body Regular**: base (16px) - Main content
- **Body Small**: sm (14px) - Captions, labels
- **Caption**: xs (12px) - Fine print

## Spacing System

### Base Unit
- Base spacing unit: 4px
- All spacing values are multiples of this unit

### Common Spacing Values
- **xxs**: 2px (0.5 units)
- **xs**: 4px (1 unit)
- **sm**: 8px (2 units)
- **md**: 16px (4 units)
- **lg**: 24px (6 units)
- **xl**: 32px (8 units)
- **2xl**: 48px (12 units)
- **3xl**: 64px (16 units)

## UI Components

### Cards

#### Product Cards
```tsx
<Card className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
  <div className="aspect-[4/5] w-full mx-auto">
    <img src={product.image} alt={product.name} className="object-cover rounded-lg w-full h-full" />
  </div>
  <CardHeader className="p-0 mt-2">
    <CardTitle className="text-sm font-bold text-white font-merienda mt-2">{product.name}</CardTitle>
    <CardDescription className="text-xs text-white/80 font-merienda mb-2">{product.description}</CardDescription>
  </CardHeader>
  <CardContent className="p-0 mt-2">
    <span className="text-sm font-bold text-white font-merienda">${product.price.toFixed(2)}</span>
  </CardContent>
  <CardFooter className="p-0 mt-2">
    <button className="px-4 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda">
      Add to Cart
    </button>
  </CardFooter>
</Card>
```

#### Collection Cards
```tsx
<Card className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
  <div className="aspect-video w-full mx-auto mb-6">
    <img src={collection.image} alt={collection.name} className="object-cover rounded-lg w-full h-full" />
  </div>
  <CardHeader className="p-0 text-center">
    <CardTitle className="text-2xl font-bold text-white font-sans mb-2">{collection.name}</CardTitle>
    <CardDescription className="text-lg text-white/80 font-merienda mb-4">{collection.description}</CardDescription>
  </CardHeader>
  <CardContent className="p-0 mb-4 text-center">
    <span className="text-sm text-white/70 font-merienda">{collection.itemCount} items</span>
  </CardContent>
  <CardFooter className="p-0 flex justify-center">
    <button className="px-6 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda">
      Explore Collection
    </button>
  </CardFooter>
</Card>
```

### Buttons

#### Primary Button
```tsx
<Button className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda">
  Shop Collection
</Button>
```

#### Secondary Button
```tsx
<Button className="px-6 py-2 rounded-lg font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-black/60 hover:shadow-[0_0_15px_#234645] transition-all duration-300 font-merienda">
  Cancel
</Button>
```

#### Icon Button
```tsx
<button className="p-2 rounded-full hover:bg-white/10 transition-colors relative" aria-label="Shopping Cart">
  <svg>...</svg>
  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
</button>
```

### Forms

#### Text Input
```tsx
<Input 
  type="text" 
  id="first-name" 
  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
  required 
/>
```

#### Textarea
```tsx
<Textarea 
  id="review-content" 
  rows={4} 
  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
  placeholder="Share your experience with this product" 
/>
```

#### Form Label
```tsx
<Label htmlFor="first-name" className="block text-sm font-medium text-white mb-1">First Name</Label>
```

### Navigation

#### Desktop Navigation
```tsx
<nav className="sticky top-0 z-50 p-4 bg-black/30 backdrop-blur-md border-b border-white/20">
  <div className="container mx-auto flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold font-sans">Mmwafrika</Link>
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
      <Link to="/shop" className="hover:text-teal-500 transition-colors">Shop</Link>
      {/* ... other links */}
    </div>
    {/* ... icons and mobile menu */}
  </div>
</nav>
```

#### Mobile Navigation
```tsx
{/* Mobile menu button */}
<button className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Toggle Menu">
  <svg>...</svg>
</button>

{/* Full-screen Mobile Navigation Overlay */}
{isMenuOpen && (
  <div 
    className="fixed inset-0 z-50 flex"
    style={{ 
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }}
  >
    {/* Menu content */}
    <div className="flex flex-col w-full h-full p-6">
      {/* Close button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      
      {/* Navigation links */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-8">
        <Link
          to="/"
          className="text-2xl font-medium text-white hover:text-teal-500 transition-colors py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        {/* ... other links */}
      </div>
      
      {/* Contact information */}
      <div className="flex flex-col items-center py-8 border-t border-white/20">
        <div className="flex flex-col items-center space-y-2 text-sm text-white/80">
          <div className="flex items-center">
            <span className="mr-2">📞</span>
            <span>Phone: 079 042 7032</span>
          </div>
          {/* ... other contact info */}
        </div>
      </div>
    </div>
  </div>
)}
```

## Layout Patterns

### Grid System
- **Desktop**: 4 columns for product grids
- **Tablet**: 3 columns for product grids
- **Mobile**: 2 columns for product grids
- **Single Column**: For detailed content

### Section Spacing
- **Section Padding**: py-12 (48px vertical padding)
- **Section Margins**: mb-12 (48px bottom margin)
- **Component Spacing**: gap-8 (32px gap in grids)

### Container Widths
- **Narrow**: max-w-2xl (672px)
- **Medium**: max-w-4xl (896px)
- **Wide**: max-w-6xl (1152px)
- **Full**: container mx-auto (responsive container)

## Responsive Breakpoints

Tailwind CSS default breakpoints:
- **Small (sm)**: 640px
- **Medium (md)**: 768px
- **Large (lg)**: 1024px
- **Extra Large (xl)**: 1280px
- **2X Large (2xl)**: 1536px

## Animation and Transitions

### Hover Effects
- **Scale**: hover:scale-105 (5% scale increase)
- **Shadow**: hover:shadow-[0_0_25px_#234645] (colored glow)
- **Background**: hover:bg-black/60 (darker background)

### Transition Properties
- **Duration**: duration-300 (300ms)
- **Timing**: ease-in-out (smooth easing)
- **Properties**: transition-all (all properties)

### Focus States
- **Ring**: focus:ring-2 focus:ring-teal-500
- **Outline**: focus:outline-none
- **Offset**: focus:ring-offset-2

### Loading Spinner

#### Default Size
```tsx
<LoadingSpinner />
```

#### Small Size
```tsx
<LoadingSpinner size="sm" />
```

#### Large Size
```tsx
<LoadingSpinner size="lg" />
```

#### With Custom Classes
```tsx
<LoadingSpinner className="my-custom-class" />
```

## Accessibility Guidelines

### Color Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Use accessibility testing tools to verify

### Focus Management
- Visible focus indicators for interactive elements
- Logical tab order through components
- Skip navigation links for keyboard users

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3, etc.)
- Landmark elements (nav, main, footer)
- ARIA labels for icon-only buttons

### Screen Reader Support
- Alt text for all images
- Descriptive link text
- Proper form labeling

## Visual Design Principles

### Depth and Layering
1. **Background Layer**: Solid colors or subtle gradients
2. **Content Layer**: Glassmorphic cards with blur effects
3. **Interactive Layer**: Buttons and form elements with hover states
4. **Overlay Layer**: Modals and dropdowns with backdrop

### Visual Hierarchy
1. **Primary**: Large headings, primary buttons, hero sections
2. **Secondary**: Subheadings, secondary buttons, card titles
3. **Tertiary**: Body text, labels, captions
4. **Accent**: Links, icons, highlights

### Consistency Rules
1. **Spacing**: Use consistent padding and margin scales
2. **Typography**: Maintain font family and size relationships
3. **Colors**: Limit palette and use consistently
4. **Components**: Reuse and extend existing components

### Feedback and States
1. **Hover**: Visual change on mouseover
2. **Active**: State change when element is pressed
3. **Focus**: Visible indicator for keyboard navigation
4. **Loading**: Indicators for asynchronous operations
5. **Error**: Clear messaging for form validation
6. **Application Errors**: Global error notifications for critical failures
7. **Data Corruption Recovery**: Graceful handling of corrupted persisted data

## Error Handling Patterns

### Application-Level Errors
- **Global Error Boundaries**: Wrap main application components to catch unhandled errors
- **User-Friendly Error Messages**: Display clear, non-technical error messages to users
- **Error Logging**: Log detailed error information to console for developers

### Data Persistence Errors
- **LocalStorage Validation**: Always validate data retrieved from localStorage
- **Graceful Degradation**: Fall back to default values when stored data is corrupt
- **Automatic Recovery**: Clear problematic data and notify users when necessary

### Network Errors
- **Offline Handling**: Provide clear messaging when network requests fail
- **Retry Mechanisms**: Implement retry logic for transient network issues
- **Loading States**: Show appropriate loading indicators during network operations

### Form Validation Errors
- **Real-time Validation**: Validate form inputs as users interact with them
- **Clear Error Messaging**: Display specific error messages near problematic fields
- **Visual Indicators**: Highlight invalid fields with appropriate styling

This design system documentation ensures consistent implementation of the Mmwafrika Store visual identity across all components and pages. All UI development should reference these guidelines to maintain brand coherence and user experience quality.