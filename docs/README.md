# Mmwafrika Store Documentation

Welcome to the Mmwafrika Store documentation. This documentation covers all aspects of the project, from setup and development to component usage and deployment.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Component Library](#component-library)
4. [Styling System](#styling-system)
5. [Development Guidelines](#development-guidelines)
6. [Testing](#testing)
7. [Deployment](#deployment)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mmwafrika-store

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run tailwind:build` - Build Tailwind CSS
- `npm run tailwind:watch` - Watch Tailwind CSS changes

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Page components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── css/                # CSS files
└── ...
```

## Component Library

The Mmwafrika Store uses a combination of shadcn/ui components and custom components. For detailed information about the component library, see [Component Library Documentation](./component-library.md).

### Core Components

1. **GradientButton** - Custom button with gradient backgrounds
   - [Documentation](./gradient-button.md)
   
2. **HeroSection** - Reusable hero section component
   - [Documentation](./hero-section.md)
   
3. **DigitalHero** - Culturally relevant hero section for traditional African clothing
   - [Documentation](./digital-hero.md)

4. **shadcn/ui Components** - Base component library
   - Button
   - Card
   - Input
   - etc.

## Styling System

### Tailwind CSS

The project uses Tailwind CSS for styling with a custom configuration defined in `tailwind.config.js`.

### Color Scheme

- Primary: Teal (`#234645`, `#1b3534`)
- Background: Light (`#f8f9fa`) / Dark (`#1a1a1a`)
- Text: Dark (`#212529`) / Light (`#f8f9fa`)

### Typography

Fonts used in the project:
- **Poppins**: Main font for headings and body text
- **Merienda**: Script font for special text elements

## Development Guidelines

### Component Creation

When creating new components, follow the guidelines in [Component Library Documentation](./component-library.md).

### Code Quality

- Use TypeScript for type safety
- Follow ESLint rules
- Maintain consistent code style
- Write tests for new functionality

### Git Workflow

1. Create feature branches from `main`
2. Follow conventional commit messages
3. Submit pull requests for code review
4. Ensure all tests pass before merging

## Testing

The project uses Jest and React Testing Library for unit testing.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Deployment

To build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request