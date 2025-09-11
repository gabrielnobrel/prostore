import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        // NÃO use Prisma aqui! Apenas lógica simples ou fetch para API
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    authorized({ request }) {
      // Sua lógica de cookie pode ficar aqui, mas sem Prisma!
      if (!request.cookies.get("sessionCartId")) {
        const sessionCartId = crypto.randomUUID();
        const response = NextResponse.next();
        response.cookies.set("sessionCartId", sessionCartId);
        return response;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { auth } = NextAuth(config);
