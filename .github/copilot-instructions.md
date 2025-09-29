# GitHub Copilot Instructions for ProStore

This is a Next.js 15 e-commerce application called ProStore. When assisting with this project, please follow these guidelines:

## Project Overview
ProStore is a modern e-commerce platform built with:
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Next.js App Router, Prisma ORM, PostgreSQL, NextAuth.js
- **Deployment**: Vercel with Neon Database

## Code Style & Conventions

### General Guidelines
- Write clean, readable, and maintainable TypeScript code
- Follow existing code patterns and naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional programming patterns where appropriate

### TypeScript Standards
- Use strict TypeScript settings
- Define proper interfaces and types
- Avoid using `any` type - use proper typing
- Use type inference where possible
- Export types from `/types` directory

### Import Organization
- Group imports logically: React/Next.js, third-party, local
- Use absolute imports with `@/` prefix for project files
- Import types separately when needed: `import type { ... }`

### File Naming
- Use kebab-case for file names: `user-profile.tsx`
- Use PascalCase for component names: `UserProfile`
- Use camelCase for variables and functions: `getUserData`
- Use UPPER_CASE for constants: `MAX_FILE_SIZE`

## Architecture Patterns

### Component Architecture
- Keep components small and focused on single responsibility
- Use composition over inheritance
- Separate business logic from presentation logic
- Use custom hooks for reusable logic

### Data Flow
- Use server actions for data mutations
- Leverage Next.js built-in caching for data fetching
- Handle loading and error states consistently
- Use proper form validation with Zod schemas

### Error Handling
- Implement proper error boundaries
- Use try-catch blocks in server actions
- Return structured error responses
- Provide user-friendly error messages

## Development Workflow

### Before Writing Code
1. Understand the existing codebase structure
2. Check for similar implementations to maintain consistency
3. Consider the impact on other parts of the application
4. Ensure TypeScript types are properly defined

### Code Implementation
1. Write the minimal code necessary to solve the problem
2. Follow the established patterns in the codebase
3. Include proper error handling and validation
4. Ensure responsive design for UI components
5. Add proper accessibility attributes

### Testing Considerations
- Write testable code with proper separation of concerns
- Consider edge cases and error scenarios
- Ensure proper validation of user inputs
- Test responsive behavior for UI components

## Specific Guidelines

### Database Operations
- Always validate data before database operations
- Use Prisma's type-safe query methods
- Handle database errors gracefully
- Consider database performance and query optimization

### Authentication & Security
- Always check user authentication for protected operations
- Validate user permissions before sensitive actions
- Never expose sensitive data in client-side code
- Use environment variables for configuration

### Performance Optimization
- Use Next.js Image component for images
- Implement proper loading states
- Consider code splitting for large components
- Optimize bundle size by avoiding unnecessary imports

### Accessibility
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers when possible

## Code Quality Checklist
- [ ] TypeScript types are properly defined
- [ ] Error handling is implemented
- [ ] Code follows existing patterns
- [ ] Responsive design is considered (for UI)
- [ ] Accessibility guidelines are followed (for UI)
- [ ] Performance implications are considered
- [ ] Security best practices are followed
- [ ] Code is properly documented when complex

## Common Utilities Available
- `cn()` - Utility for conditional class names
- `formatError()` - Standardized error formatting
- `convertToPlainObject()` - Convert Prisma objects for client use
- `formatCurrency()` - Format currency values
- `formatId()` - Shorten UUIDs for display

Remember to always prioritize code quality, maintainability, and user experience when contributing to this project.