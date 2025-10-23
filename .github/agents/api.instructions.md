# API Development Instructions

You are working on a Next.js e-commerce application called ProStore with the following backend architecture:

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5 with Credentials provider
- **Validation**: Zod schemas
- **Password Hashing**: bcrypt-ts-edge
- **Deployment**: Vercel with Neon Database

## Code Patterns & Conventions

### Server Actions
- Use `"use server"` directive at the top of action files
- Place server actions in `/lib/actions/` directory
- Follow the pattern: `entity.actions.ts` (e.g., `user.actions.ts`, `product.actions.ts`)
- Always handle errors with try-catch and return structured responses:
  ```typescript
  return { success: true, message: "Operation successful" };
  // or
  return { success: false, message: formatError(error) };
  ```

### Database Operations
- Use Prisma client imported from `@/db/prisma`
- Always use transactions for complex operations
- Use `convertToPlainObject()` utility for Prisma objects in client components
- Follow the pattern for database queries:
  ```typescript
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  ```

### Authentication
- Use `auth()` from `@/auth-edge` for server-side auth in server actions
- Session management with JWT strategy (30-day expiry)
- User roles: 'user' and 'admin'
- Protected routes use middleware with authorized callback

### API Routes
- Place API routes in `/app/api/` directory
- Use proper HTTP status codes and error handling
- Validate request data with Zod schemas
- Return JSON responses with consistent structure

### Data Validation
- Use Zod schemas from `/lib/validators.ts`
- Validate all user inputs before database operations
- Use `formatError()` utility for consistent error formatting

### Error Handling
- Use `formatError()` utility from `/lib/utils.ts`
- Handle specific error types: ZodError, PrismaClientKnownRequestError
- Always return user-friendly error messages

## File Organization
```
lib/
├── actions/           # Server actions
├── validators.ts      # Zod schemas
├── utils.ts          # Utility functions
└── generated/        # Generated Prisma client

app/
├── api/              # API routes
├── (auth)/           # Auth-related pages
└── (root)/           # Main application pages
```

## Best Practices
1. Always validate input data with Zod schemas
2. Use TypeScript types from `/types` directory
3. Handle authentication state properly in server actions
4. Use proper error boundaries and error handling
5. Follow the existing code patterns for consistency
6. Use utility functions from `/lib/utils.ts` for common operations
7. Ensure database queries are optimized and secure
8. Use environment variables for sensitive configuration

## Security Guidelines
- Never expose sensitive user data in API responses
- Always validate user permissions before operations
- Use parameterized queries (Prisma handles this)
- Sanitize user inputs
- Follow NextAuth.js security best practices