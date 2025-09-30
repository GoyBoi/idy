# Mmwafrika Store - E-commerce Frontend

Modern, mobile-first e-commerce frontend for Mmwafrika Store with minimalist black/white/teal design and glassmorphic UI elements.

## Project Overview

This project implements a responsive e-commerce frontend for Mmwafrika Store, featuring:

- Minimalist aesthetic with black, white, and teal color scheme
- Glassmorphic UI elements using Tailwind CSS
- Responsive product grids with consistent card sizing
- Multi-page architecture with dedicated sections
- Community features including reviews and user-generated content
- Culturally relevant design elements showcasing traditional African clothing

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with glassmorphic effects
- **Routing**: React Router
- **Build Tool**: Webpack
- **UI Components**: shadcn/ui components

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── index.tsx               # Entry point
├── pages/                  # Individual page components
├── components/             # Reusable UI components
├── context/                # React context providers
├── css/                    # Styling files
├── docs/                   # Project documentation
└── assets/                 # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Documentation

Comprehensive documentation is available in the `src/docs/` folder:

- **implementation-summary.md**: Summary of key implementation changes
- **project-progress-tracker.md**: Detailed project progress and next steps
- **website-structure-documentation.md**: Current website structure overview
- **hero-section-redesign-plan.md**: Plan for hero section redesign
- **hero-section-redesign-progress.md**: Progress tracker for hero section redesign

Additionally, component-specific documentation is available in the `docs/` folder:

- **component-library.md**: Overview of the component library
- **component-summary.md**: Summary of custom components
- **gradient-button.md**: Documentation for the GradientButton component
- **hero-section.md**: Documentation for the HeroSection component
- **digital-hero.md**: Documentation for the DigitalHero component

## Testing

This project includes comprehensive end-to-end tests using Playwright to verify functionality across different devices and orientations:

- Mobile devices in portrait and landscape modes
- Tablet devices in portrait and landscape modes
- Desktop devices
- Menu overlay behavior and visibility
- Accessibility features
- Orientation change handling
- Scrolling behavior within menu overlay
- Content accessibility across all modes

To run the tests:
```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run only the comprehensive menu tests
npm run test:menu-comprehensive

# Run comprehensive menu tests with UI
npm run test:menu-comprehensive:ui
```

## Features

### Pages
- Home page with hero section and featured products
- Shop page with complete product catalog
- Collections page showcasing themed groupings
- About page with company information
- Contact page with form and business details
- Community page with reviews and user content
- Cart page with shopping cart management
- Wishlist page with wishlist management
- Product detail page with comprehensive product information
- DigitalHero demo page showcasing the culturally relevant hero component
- Background showcase page demonstrating the simplified canvas-based background implementation

### UI Components
- Responsive navigation with mobile menu
- Standardized product cards with consistent sizing
- Interactive buttons with hover effects
- Form elements with proper validation
- Glassmorphic design elements throughout
- Custom GradientButton component with gradient backgrounds
- Enhanced HeroSection component with animated elements
- DigitalHero component for showcasing traditional African clothing
- Simplified canvas-based background implementation

## Recent Improvements

### Background Implementation Simplification
- Removed complex LiquidEther WebGL-based background implementation
- Eliminated Three.js dependencies for better performance
- Implemented simplified canvas-based background from scratch
- Added sophisticated radial gradients using brand colors
- Maintained smooth 60fps animations with requestAnimationFrame
- Created multiple floating elements with radial gradients
- Ensured responsive design that adapts to screen size changes

### Performance Enhancements
- Significantly reduced bundle size by removing Three.js dependencies
- Enhanced rendering performance on mobile devices
- Simplified background rendering pipeline
- Maintained smooth animations without heavy dependencies

### Code Quality Improvements
- Cleaned up codebase by removing unnecessary components
- Simplified implementation with pure React and HTML5 Canvas
- Reduced complexity while improving visual appeal
- Created clear documentation for the new implementation

## Design Principles

- **Minimalist Aesthetic**: Clean, uncluttered interface
- **Glassmorphism**: Frosted glass effects for depth
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG-compliant contrast and navigation
- **Performance**: Optimized loading and rendering
- **Cultural Relevance**: Authentic representation of African heritage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary to Mmwafrika Store.

## Contact

For questions about this project, please contact the development team.