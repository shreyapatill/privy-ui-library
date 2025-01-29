Let me create a comprehensive README for your design system:

# PrivyTrack Design System

A centralized design system containing standardized UI components, color tokens, icons, and typography for PrivyTrack applications. Built to streamline development workflows and maintain visual consistency across products.

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd privy-design-system
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

## 🧱 Core Components

The design system includes:
- Color tokens and themes
- Icon library and assets
- Typography system
- Reusable React components
- Design primitives and utilities

## 🛠️ Tech Stack

- **React Native** - Core framework
- **NativeWind** - Utility-first styling using Tailwind CSS
- **shadcn/ui** - Component library foundation
- **TypeScript** - Type safety and developer experience
- **Supabase** - Backend and authentication

## 📚 Usage

Import components and tokens:
```typescript
import { Button, Typography, Colors } from '@privy/design-system';

const MyComponent = () => (
  <Button variant="primary">
    Click me
  </Button>
);
```

## 🔧 Development

### Project Structure
```
src/
  ├── components/     # Reusable UI components
  ├── tokens/         # Design tokens (colors, spacing, etc.)
  ├── themes/         # Theme configurations
  ├── utils/          # Helper functions
  └── types/          # TypeScript definitions
```

### Configuration

The project uses:
- ESLint for code quality
- Prettier for code formatting
- TypeScript for type safety
- Absolute imports for clean import paths
