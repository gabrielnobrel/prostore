# Instruções de Desenvolvimento de API

Você está trabalhando em uma aplicação de e-commerce Next.js chamada ProStore com a seguinte arquitetura backend:

## Stack Tecnológico
- **Framework**: Next.js 15 com App Router
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Autenticação**: NextAuth.js v5 com provedor Credentials
- **Validação**: Esquemas Zod
- **Hash de Senhas**: bcrypt-ts-edge
- **Deploy**: Vercel com Neon Database

## Padrões de Código & Convenções

### Server Actions
- Use a diretiva `"use server"` no topo dos arquivos de ação
- Coloque server actions no diretório `/lib/actions/`
- Siga o padrão: `entity.actions.ts` (ex.: `user.actions.ts`, `product.actions.ts`)
- Sempre trate erros com try-catch e retorne respostas estruturadas:
  ```typescript
  return { success: true, message: "Operação bem-sucedida" };
  // ou
  return { success: false, message: formatError(error) };
  ```

### Operações de Banco de Dados
- Use o cliente Prisma importado de `@/db/prisma`
- Sempre use transações para operações complexas
- Use o utilitário `convertToPlainObject()` para objetos Prisma em componentes cliente
- Siga o padrão para consultas de banco de dados:
  ```typescript
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  ```

### Autenticação
- Use `auth()` de `@/auth-edge` para autenticação server-side em server actions
- Gerenciamento de sessão com estratégia JWT (expiração de 30 dias)
- Papéis de usuário: 'user' e 'admin'
- Rotas protegidas usam middleware com callback autorizado

### Rotas de API
- Coloque rotas de API no diretório `/app/api/`
- Use códigos de status HTTP adequados e tratamento de erros
- Valide dados de requisição com esquemas Zod
- Retorne respostas JSON com estrutura consistente

### Validação de Dados
- Use esquemas Zod de `/lib/validators.ts`
- Valide todas as entradas do usuário antes das operações de banco de dados
- Use o utilitário `formatError()` para formatação consistente de erros

### Tratamento de Erros
- Use o utilitário `formatError()` de `/lib/utils.ts`
- Trate tipos de erro específicos: ZodError, PrismaClientKnownRequestError
- Sempre retorne mensagens de erro amigáveis ao usuário

## Organização de Arquivos
```
lib/
├── actions/           # Server actions
├── validators.ts      # Esquemas Zod
├── utils.ts          # Funções utilitárias
└── generated/        # Cliente Prisma gerado

app/
├── api/              # Rotas de API
├── (auth)/           # Páginas relacionadas à autenticação
└── (root)/           # Páginas principais da aplicação
```

## Melhores Práticas
1. Sempre valide dados de entrada com esquemas Zod
2. Use tipos TypeScript do diretório `/types`
3. Trate o estado de autenticação adequadamente em server actions
4. Use error boundaries e tratamento de erros adequados
5. Siga os padrões de código existentes para consistência
6. Use funções utilitárias de `/lib/utils.ts` para operações comuns
7. Garanta que consultas de banco de dados sejam otimizadas e seguras
8. Use variáveis de ambiente para configuração sensível

## Diretrizes de Segurança
- Nunca exponha dados sensíveis do usuário em respostas de API
- Sempre valide permissões do usuário antes de operações
- Use consultas parametrizadas (Prisma já faz isso)
- Sanitize entradas do usuário
- Siga as melhores práticas de segurança do NextAuth.js