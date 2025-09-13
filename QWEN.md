# Mmwafrika Store - E-commerce Frontend Project

This directory contains the context and assets for building a modern, mobile-first e-commerce frontend for "Mmwafrika Store". The project utilizes Tailwind CSS and shadcn/ui to create a minimalist black/white/teal design with glassmorphic UI elements.

## Project Overview

The goal is to build a responsive e-commerce frontend with a focus on a clean aesthetic and modern UI patterns. Key features include:
- A minimalist color scheme using Black (#000), White (#FFF), and Teal (#234645) for accents.
- Glassmorphic design elements for a frosted glass effect.
- A responsive product grid with four distinct card sizes (XS, SM, MD, LG) and an XL wide/hero size.
- Integrated shopping cart functionality.
- A checkout flow supporting both guest and registered user checkouts.
- Community review features for signed-in users.

This project is guided by a specific agent configuration that details the frontend architecture and implementation requirements. The context also includes documentation on image preparation, typography guidelines, and code examples for buttons and card designs.

## Key Files and Directories

- `.qwen/agents/mmwafrika-ecommerce-builder.md`: The core agent instruction file that defines the project's architectural and design requirements.
- `additional_context/docs/image_prep.md`: Guidelines for image preparation, including sizing, formats, compression, and naming conventions for different product card types.
- `additional_context/docs/typography_Guidelines.md`: Specifies the fonts (Poppins for headings, Merienda for body text), weights, sizes, and Tailwind classes for consistent typography.
- `additional_context/examples/code/buttons.html`: HTML examples demonstrating the styling and hover effects for various buttons (Add to Cart, Wishlist, Checkout, Guest Checkout).
- `additional_context/examples/code/card_design.html`: HTML example showcasing the responsive grid layout and glassmorphic design for different product card sizes.
- `additional_context/images/`: Directory containing sample product images in Large and Medium sizes, likely used for development and testing.

## Usage

This directory serves as the foundational context for developing the Mmwafrika Store frontend. The agent instruction file should be the primary reference for implementation details. The documentation and examples provide specific guidance on styling, image handling, and component structure. The images can be used as placeholders during development.