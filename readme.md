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


## Coding Progress

### Currently working on: Symptom icons

### Pink Icons
![](https://geps.dev/progress/100?dangerColor=EDC9BD&warningColor=EDC9BD&successColor=EDC9BD)

### Red Icons
![](https://geps.dev/progress/100?dangerColor=F18769&warningColor=F18769&successColor=F18769)

### Yellow Icons
![](https://geps.dev/progress/33?dangerColor=F4BB79&warningColor=F4BB79&successColor=F4BB79)

- [x] Cramps
    - [x] Lower Stomach
    - [x] Vulvar
    - [x] Lower Back
    - [x] Sensitive
- [x] Skin
    - [ ] Normal
    - [ ] Dry
    - [ ] Oily
    - [ ] Headache
- [x] Hair
    - [ ] Normal Scalp
    - [ ] Oily Scalp
    - [ ] Dry Scalp
    - [ ] Hairfall
- [x] Cravings
    - [ ] Carbs
    - [ ] Sweet
    - [ ] Spicy
    - [ ] Salty
    - [ ] Greasy
- [x] Digestion
    - [ ] Normal
    - [ ] Bloated
    - [ ] Gassy
    - [ ] Heartburn
    - [ ] Nausea
- [x] Discharge
    - [ ] None
    - [ ] Clear
    - [ ] Dry
    - [ ] Creamy
    - [ ] Sticky
- [x] Feces
    - [ ] Normal
    - [ ] Constipation
    - [ ] Diarrhea

### Green Icons
![](https://geps.dev/progress/0?dangerColor=649182&warningColor=649182&successColor=649182)

### Light Green Icons
![](https://geps.dev/progress/0?dangerColor=A7C5B7&warningColor=A7C5B7&successColor=A7C5B7)
