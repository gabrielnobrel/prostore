# Frontend Development Instructions

You are working on a Next.js e-commerce application called ProStore with the following frontend architecture:

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **React**: 19.1.0 with TypeScript
- **Styling**: TailwindCSS 4 with custom design tokens
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Themes**: next-themes for dark/light mode
- **Notifications**: Sonner for toast notifications

## Code Patterns & Conventions

### Component Structure
- Use TypeScript functional components with proper typing
- Place reusable components in `/components` directory
- Use shadcn/ui components as building blocks
- Follow the existing component patterns in the codebase

### Styling Guidelines
- Use TailwindCSS classes with the custom design system
- Leverage predefined utility classes from `/assets/styles/globals.css`:
  - `.wrapper` - Max width container with responsive padding
  - `.flex-start`, `.flex-center`, `.flex-between` - Flexbox utilities
  - `.h1-bold`, `.h2-bold`, `.h3-bold` - Typography utilities
- Use CSS custom properties for consistent theming
- Support both light and dark modes

### Layout System
- Main layout structure in `/app/layout.tsx`:
  ```tsx
  <div className="flex h-screen flex-col">
    <Header />
    <main className="flex-1 wrapper">{children}</main>
    <Footer />
  </div>
  ```
- Use the `wrapper` class for content containers
- Ensure responsive design across all breakpoints

### Form Handling
- Use React Hook Form with Zod resolvers for validation
- Follow this pattern for forms:
  ```tsx
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ... }
  });
  ```
- Use server actions for form submissions
- Handle loading states and error messages appropriately

### State Management
- Use React state hooks for local component state
- Use server actions for data mutations
- Leverage Next.js built-in caching for data fetching
- Use `useFormState` for server action integration

### Navigation & Routing
- Use Next.js App Router for navigation
- Organize pages in route groups: `(auth)`, `(root)`
- Use proper loading and error boundaries
- Implement proper SEO with metadata API

## UI Component Guidelines

### Design System
- Primary colors: `oklch(0.18 0.15 257)` (dark blue)
- Background: `oklch(1 0 0)` (white) / `oklch(0.13 0.19 257)` (dark)
- Use the defined color palette in CSS custom properties
- Follow the established spacing and typography scale

### Component Composition
- Build complex UIs using shadcn/ui primitives
- Use Radix UI components for accessibility
- Implement proper keyboard navigation
- Ensure ARIA compliance

### Responsive Design
- Mobile-first approach with TailwindCSS breakpoints
- Use responsive utilities: `sm:`, `md:`, `lg:`, `xl:`
- Test across different screen sizes
- Ensure touch-friendly interfaces

## File Organization
```
app/
├── (auth)/           # Authentication pages
├── (root)/           # Main application pages
├── layout.tsx        # Root layout
├── loading.tsx       # Global loading UI
└── not-found.tsx     # 404 page

components/
├── ui/               # shadcn/ui components
└── ...               # Custom components

assets/
└── styles/
    └── globals.css   # Global styles and utilities
```

## Best Practices
1. **Accessibility**: Use semantic HTML and proper ARIA attributes
2. **Performance**: Optimize images, use Next.js Image component
3. **SEO**: Implement proper metadata and Open Graph tags
4. **Type Safety**: Use TypeScript strictly, avoid `any` types
5. **Code Reusability**: Create reusable components and utilities
6. **Error Handling**: Implement proper error boundaries and fallbacks
7. **Loading States**: Show appropriate loading indicators
8. **User Feedback**: Use toast notifications for user actions

## Styling Best Practices
1. Use utility classes instead of custom CSS when possible
2. Group related classes logically in className strings
3. Use the predefined utility classes for consistency
4. Implement proper hover and focus states
5. Ensure sufficient color contrast for accessibility
6. Use consistent spacing using the design system scale

## Development Workflow
1. Start with designing the component structure
2. Implement the basic functionality
3. Add proper styling with TailwindCSS
4. Ensure responsive behavior
5. Add accessibility features
6. Test across different browsers and devices
7. Optimize for performance

## Common Patterns
- Use `cn()` utility function for conditional class names
- Implement proper loading and error states
- Use proper TypeScript interfaces for props
- Follow the existing naming conventions
- Ensure components are properly documented with comments when complex