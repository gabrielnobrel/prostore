# AI Agent Documentation Guide

This file helps Claude Code and other AI agents work effectively on this Next.js project by establishing the correct documentation context.

## Next.js Version

**Current:** Next.js 16
**Docs:** https://nextjs.org/docs

When working on this project, use the Next.js 16 documentation as the authoritative source for:
- API changes and deprecations
- Best practices and migration guides
- Features and configuration options
- Troubleshooting and debugging

## Key Next.js 16 Resources

- **Upgrade Guide:** https://nextjs.org/docs/app/guides/upgrading/version-16
- **App Router Guide:** https://nextjs.org/docs/app
- **API Routes:** https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Deployment:** https://nextjs.org/docs/app/building-your-application/deploying

## Project Structure

- **App directory:** `app/` (using App Router)
- **Components:** `components/`
- **Configuration:** `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- **Database:** Prisma ORM with Neon serverless PostgreSQL
- **Authentication:** NextAuth.js v5.0.0-beta

## Development Tools

Run `npm run dev` to start the development server with Turbopack (Next.js 16).

## Notes for AI Agents

When upgrading or modifying this project:
1. Always reference Next.js 16 documentation
2. Test changes with `npm run dev` before committing
3. Check for breaking changes in major dependencies
4. Ensure compatibility with the current React 19.1.0 version

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
