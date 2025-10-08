# Copilot Instructions for prostore

## Visão Geral
- Projeto e-commerce moderno usando Next.js (App Router), Prisma, autenticação NextAuth e integração com PayPal.
- Estrutura modular: páginas em `app/`, componentes reutilizáveis em `components/`, lógica de domínio em `lib/` e acesso a dados em `db/`.
- Fluxos principais: autenticação, catálogo de produtos, carrinho, checkout, pedidos e métodos de pagamento.

## Convenções e Padrões
- **Componentes**: Use componentes de UI em `components/ui/` para consistência visual. Componentes de domínio (ex: produto, carrinho) ficam em subpastas de `components/`.
- **Ações**: Lógica de manipulação de dados (ex: adicionar ao carrinho, criar pedido) está em `lib/actions/*.actions.ts`.
- **Validações**: Schemas e utilitários de validação em `lib/validators.ts`.
- **Dados**: Acesso ao banco via Prisma (`db/prisma.ts`). Dados de exemplo e seed em `db/sample-data.ts` e `db/seed.ts`.
- **Rotas API**: Endpoints customizados em `app/api/` (ex: autenticação).
- **Autenticação**: NextAuth configurado em `app/api/auth/[...nextauth]/`.
- **Estilos**: CSS global em `assets/styles/globals.css`.

## Workflows de Desenvolvimento
- **Rodar localmente**: `npm run dev` (ou `yarn dev`, `pnpm dev`, `bun dev`).
- **Testes**: `npm test` executa testes com Jest. Testes ficam em `tests/`.
- **Seed de dados**: Execute `npx tsx db/seed.ts` para popular o banco local.
- **Prisma**: Modifique `prisma/schema.prisma` e rode `npx prisma migrate dev --name <desc>` para migrar.
- **Debug**: Use logs em ações e API. Veja exemplos em `lib/actions/*.ts`.

## Integrações e Pontos Críticos
- **PayPal**: Integração em `lib/paypal.ts`.
- **NextAuth**: Fluxo customizado em `app/api/auth/[...nextauth]/` e formulários em `app/(auth)/sign-in/` e `sign-up/`.
- **Checkout**: Fluxo multi-etapas usando componentes em `components/shared/checkout-steps.tsx`.
- **Carrinho**: Estado do carrinho manipulado via ações em `lib/actions/cart.actions.ts`.

## Exemplos de Padrões
- Para adicionar produto ao carrinho: use `addToCart` de `lib/actions/cart.actions.ts`.
- Para criar pedido: use `createOrder` de `lib/actions/order.actions.ts`.
- Para autenticação: use hooks do NextAuth e componentes de formulário em `app/(auth)/`.

## Referências Rápidas
- Páginas principais: `app/(root)/page.tsx`, `app/(root)/cart/`, `app/(root)/order/`, `app/(root)/place-order/`.
- Componentes de UI: `components/ui/`.
- Ações: `lib/actions/`.
- Banco de dados: `db/`, `prisma/`.

> Atualize este arquivo ao adicionar fluxos ou padrões relevantes.