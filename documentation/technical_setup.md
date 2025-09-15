# Mmwafrika Store - Technical Setup and Configuration

## Project Dependencies

### Core Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x.x"
}
```

### UI Components
```json
{
  "@radix-ui/react-accordion": "^1.2.12",
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-checkbox": "^1.3.3",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-dropdown-menu": "^2.1.16",
  "@radix-ui/react-label": "^2.1.7",
  "@radix-ui/react-navigation-menu": "^1.2.14",
  "@radix-ui/react-popover": "^1.1.15",
  "@radix-ui/react-radio-group": "^1.3.8",
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-separator": "^1.1.7",
  "@radix-ui/react-slider": "^1.3.6",
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-switch": "^1.2.6",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-tooltip": "^1.2.8",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "embla-carousel-react": "^8.6.0",
  "lucide-react": "^0.363.0",
  "tailwind-merge": "^2.6.0",
  "tailwindcss-animate": "^1.0.7"
}
```

### Development Dependencies
```json
{
  "@babel/core": "^7.24.0",
  "@babel/preset-env": "^7.24.0",
  "@babel/preset-react": "^7.18.6",
  "@types/node": "^20.11.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "autoprefixer": "^10.4.21",
  "babel-loader": "^9.1.3",
  "copy-webpack-plugin": "^13.0.1",
  "css-loader": "^6.10.0",
  "file-loader": "^6.2.0",
  "html-webpack-plugin": "^5.5.0",
  "mini-css-extract-plugin": "^2.9.4",
  "postcss-loader": "^8.1.1",
  "style-loader": "^3.3.4",
  "tailwindcss": "^3.3.0",
  "ts-loader": "^9.5.0",
  "typescript": "^5.3.0",
  "webpack": "^5.90.0",
  "webpack-cli": "^5.1.4",
  "webpack-dev-server": "^4.15.1"
}
```

## Configuration Files

### 1. Tailwind CSS Configuration (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui'
        ],
        merienda: [
          'Merienda',
          'cursive'
        ]
      },
      colors: {
        teal: {
          '500': '#234645',
          '600': '#1b3534'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [],
}
```

### 2. Webpack Configuration (webpack.config.js)

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader', 
            'postcss-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets/images', to: 'assets/images' }
        ]
      }),
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        })
      ] : [])
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3001,
      open: true,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
  };
};
```

### 3. TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

### 4. PostCSS Configuration (postcss.config.js)

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

## Environment Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation Steps

1. Install project dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Create production build
- `npm run tailwind:build` - Build Tailwind CSS
- `npm run tailwind:watch` - Watch and rebuild Tailwind CSS

## File Structure

```
src/
├── App.tsx                 # Main application component with routing
├── index.tsx               # Entry point
├── pages/                  # Individual page components
│   ├── Home.tsx            # Homepage with hero section and featured products
│   ├── Shop.tsx            # Product catalog page
│   ├── Collections.tsx     # Collections showcase
│   ├── About.tsx           # Company information
│   ├── Contact.tsx         # Contact form and information
│   └── Community.tsx       # Reviews and user-generated content
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── css/                    # Styling files
│   └── input.css           # Tailwind CSS imports and custom styles
└── assets/                 # Static assets
    └── images/             # Product and background images
        ├── Large/          # Large product images
        └── Medium/         # Medium product images

documentation/              # Project documentation
├── project_documentation.md # General project overview
└── technical_setup.md      # Technical configuration details

dist/                       # Production build output
node_modules/               # Dependencies
```

## Asset Management

### Image Assets
Images are organized by size:
- `src/assets/images/Large/` - Large product images
- `src/assets/images/Medium/` - Medium product images

Webpack automatically copies these to `dist/assets/images/` during build.

### Fonts
Fonts are loaded from Google Fonts via CDN in `index.html`:
- Poppins (for headings)
- Merienda (for body text)

## Development Workflow

### Component Development
1. Create new components in `src/components/`
2. Import required shadcn/ui components
3. Use Tailwind CSS for styling
4. Follow established design patterns

### Page Development
1. Create new page components in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`
4. Follow consistent layout patterns

### Styling Guidelines
1. Use Tailwind CSS utility classes exclusively
2. Maintain glassmorphic design with:
   - `backdrop-blur-md`
   - `bg-white/10` or `bg-black/30`
   - `border border-white/20`
3. Use consistent color palette:
   - Primary: Black (#000)
   - Secondary: White (#FFF)
   - Accent: Teal (#234645)
4. Apply responsive design using Tailwind breakpoints

## Debugging Common Issues

### 1. Styles Not Applying
- Check that file extensions are included in `tailwind.config.js`
- Verify Tailwind CSS is imported in `src/css/input.css`
- Run `npm run tailwind:build` to regenerate CSS

### 2. Images Not Loading
- Verify image paths are correct
- Check that images exist in `src/assets/images/`
- Ensure webpack config includes image handling rules

### 3. Routing Issues
- Verify all routes are defined in `src/App.tsx`
- Check that `BrowserRouter` wraps the application
- Ensure navigation links use `Link` component from `react-router-dom`

### 4. Development Server Problems
- Check that port 3001 is available (project recently changed from port 3000)
- Verify webpack dev server configuration
- Clear browser cache if experiencing issues

### 5. LocalStorage Corruption Issues
- Application crashes with "reduce is not a function" errors
- Corrupted data in localStorage causing type mismatches
- Clear localStorage when encountering persistent state issues:
  ```javascript
  // In browser console
  localStorage.removeItem('cart');
  localStorage.removeItem('wishlist');
  location.reload();
  ```
- Implementation includes validation to prevent crashes from malformed data

## Performance Considerations

### Bundle Optimization
- Use code splitting for large components
- Lazy load images where appropriate
- Minimize CSS by purging unused classes

### Loading Strategies
- Implement lazy loading for off-screen components
- Use suspense for code-split components
- Optimize image sizes and formats

### Caching
- Configure proper HTTP caching headers
- Implement service workers for offline support
- Use localStorage for persistent data

This technical documentation provides a comprehensive guide to the project setup and configuration. It should be updated as the project evolves and new configurations are added.