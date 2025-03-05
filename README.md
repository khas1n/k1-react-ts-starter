# React TypeScript Starter Template

A modern, production-ready React TypeScript starter template with best practices, performance optimizations, and developer experience in mind.

## 🚀 Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 19](https://reactjs.org/) - UI library
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🎯 [ESLint](https://eslint.org/) - Code linting
- 💖 [Prettier](https://prettier.io/) - Code formatting
- 🔄 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📝 [Commitlint](https://commitlint.js.org/) - Commit message linting
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🎭 [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components
- 🎨 [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- 🔄 [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- 📝 [Zod](https://zod.dev/) - Schema validation
- 🎯 [React Hook Form](https://react-hook-form.com/) - Form handling

## 📦 Prerequisites

- Node.js 18+
- pnpm 8+

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/khas1n/k1-react-ts-starter.git
cd k1-react-ts-starter
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

5. Preview production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable components
│   └── ui/         # Shadcn UI components
├── constants/       # Constants and configurations
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── lib/             # Core utilities and shared libraries
│   └── utils/      # Utility functions (e.g., cn.ts)
├── routes/          # Route components
├── state/           # Redux store and slices
├── types/           # TypeScript type definitions
└── App.tsx          # Root component
```

## 🔧 Path Aliases

The project uses the following path aliases for better imports:

```typescript
{
  "@/*": "./src/*",
  "@/components/*": "./src/components/*",
  "@/lib/*": "./src/lib/*",
  "@/lib/utils/*": "./src/lib/utils/*",
  "@/hooks/*": "./src/hooks/*"
}
```

## 🛠️ Development Guidelines

### Code Style

- Use functional components with TypeScript
- Follow the DRY principle
- Implement proper error handling
- Write meaningful comments
- Use early returns for better readability

### Component Structure

```typescript
// ComponentName.tsx
import { FC } from 'react'
import type { ComponentNameProps } from '@/types'
import { cn } from '@/lib/utils'

export const ComponentName: FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Early returns
  if (!prop1) return null

  return (
    // JSX
  )
}
```

### State Management

- Use Redux Toolkit for global state
- Use React Context for theme/auth state
- Use local state for component-specific state
- Implement proper state normalization

### Styling

- Use Tailwind CSS for styling
- Follow mobile-first approach
- Implement dark mode support
- Use CSS variables for theming

### Performance

- Implement code splitting
- Use React.memo for expensive components
- Optimize images and assets
- Implement proper caching strategies

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `prettier.config.cjs` - Prettier configuration
- `.commitlintrc.json` - Commit message linting
- `components.json` - Shadcn UI configuration

## 📝 Git Workflow

1. Create a new branch:

```bash
git checkout -b feature/your-feature
```

2. Make your changes and commit:

```bash
git add .
git commit -m "feat: add new feature"
```

3. Push changes:

```bash
git push origin feature/your-feature
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
